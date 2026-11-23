import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambdaNode from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as apigwIntegrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as wafv2 from 'aws-cdk-lib/aws-wafv2';
import * as logs from 'aws-cdk-lib/aws-logs';

export interface ContactLambdaStackProps extends cdk.StackProps {
  /** Comma-separated list of allowed browser origins, e.g. "https://www.amnetdigital.com,http://localhost:3000" */
  allowedOrigins: string[];
}

export class ContactLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ContactLambdaStackProps) {
    super(scope, id, props);

    // SMTP credentials (host/port/user/pass/from/to) — created empty here.
    // Fill in the actual JSON value after deploy via:
    //   aws secretsmanager put-secret-value --secret-id <arn-from-output> --secret-string '{"host":"email-smtp.<region>.amazonaws.com","port":587,"user":"...","pass":"...","from":"noreply@amnetdigital.com","to":"sales@amnetdigital.com"}'
    // Never commit real credentials to source control.
    const smtpSecret = new secretsmanager.Secret(this, 'ContactSmtpSecret', {
      description: 'SMTP credentials for the Talk-to-an-Expert contact form Lambda',
    });

    const contactFunctionLogGroup = new logs.LogGroup(this, 'ContactFormFunctionLogGroup', {
      retention: logs.RetentionDays.ONE_MONTH,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const contactFunction = new lambdaNode.NodejsFunction(this, 'ContactFormFunction', {
      entry: path.join(__dirname, '..', 'lambda', 'handler.ts'),
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_24_X,
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      logGroup: contactFunctionLogGroup,
      environment: {
        SMTP_SECRET_ARN: smtpSecret.secretArn,
        ALLOWED_ORIGIN: props.allowedOrigins.join(','),
      },
      bundling: { minify: true, forceDockerBundling: false },
    });

    // Least privilege: read exactly this one secret, nothing else.
    smtpSecret.grantRead(contactFunction);

    const httpApi = new apigwv2.HttpApi(this, 'ContactHttpApi', {
      corsPreflight: {
        allowOrigins: props.allowedOrigins,
        allowMethods: [apigwv2.CorsHttpMethod.POST, apigwv2.CorsHttpMethod.OPTIONS],
        allowHeaders: ['Content-Type'],
      },
    });

    httpApi.addRoutes({
      path: '/contact',
      methods: [apigwv2.HttpMethod.POST],
      integration: new apigwIntegrations.HttpLambdaIntegration('ContactIntegration', contactFunction),
    });

    // Throttle the default stage so this public, unauthenticated endpoint
    // can't be used to run up Lambda/SES cost or blast out spam volume.
    const cfnStage = httpApi.defaultStage?.node.defaultChild as apigwv2.CfnStage | undefined;
    if (cfnStage) {
      cfnStage.defaultRouteSettings = {
        throttlingBurstLimit: 10,
        throttlingRateLimit: 5,
      };
    }

    const webAcl = new wafv2.CfnWebACL(this, 'ContactWebAcl', {
      scope: 'REGIONAL',
      defaultAction: { allow: {} },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: 'ContactFormWebAcl',
        sampledRequestsEnabled: true,
      },
      rules: [
        {
          name: 'AWS-AWSManagedRulesCommonRuleSet',
          priority: 1,
          statement: {
            managedRuleGroupStatement: { vendorName: 'AWS', name: 'AWSManagedRulesCommonRuleSet' },
          },
          overrideAction: { none: {} },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            metricName: 'CommonRuleSet',
            sampledRequestsEnabled: true,
          },
        },
        {
          name: 'AWS-AWSManagedRulesAmazonIpReputationList',
          priority: 2,
          statement: {
            managedRuleGroupStatement: { vendorName: 'AWS', name: 'AWSManagedRulesAmazonIpReputationList' },
          },
          overrideAction: { none: {} },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            metricName: 'IpReputationList',
            sampledRequestsEnabled: true,
          },
        },
        {
          name: 'RateLimitPerIp',
          priority: 3,
          action: { block: {} },
          statement: {
            rateBasedStatement: {
              // Requests per 5-minute sliding window, per source IP.
              limit: 100,
              aggregateKeyType: 'IP',
            },
          },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            metricName: 'RateLimitPerIp',
            sampledRequestsEnabled: true,
          },
        },
      ],
    });

    // Associates the WAF web ACL with the HTTP API's default ($default) stage.
    new wafv2.CfnWebACLAssociation(this, 'ContactWebAclAssociation', {
      resourceArn: cdk.Stack.of(this).formatArn({
        service: 'apigateway',
        resource: 'apis',
        resourceName: `${httpApi.apiId}/stages/$default`,
        arnFormat: cdk.ArnFormat.SLASH_RESOURCE_NAME,
        account: '',
      }),
      webAclArn: webAcl.attrArn,
    });

    new cdk.CfnOutput(this, 'ContactApiUrl', {
      value: `${httpApi.apiEndpoint}/contact`,
      description: 'Set this as NEXT_PUBLIC_CONTACT_API_URL in the Next.js site build environment',
    });
    new cdk.CfnOutput(this, 'SmtpSecretArn', {
      value: smtpSecret.secretArn,
      description: 'Fill in the real SMTP credentials JSON via aws secretsmanager put-secret-value',
    });
  }
}

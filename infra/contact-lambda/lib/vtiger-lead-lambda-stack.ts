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

export interface VtigerLeadLambdaStackProps extends cdk.StackProps {
  /** Comma-separated list of allowed browser origins, e.g. "https://www.amnetdigital.com,http://localhost:3000" */
  allowedOrigins: string[];
}

/**
 * Separate stack from AmnetContactLambdaStack — creates Leads in Vtiger via REST API.
 * Does not modify the email contact Lambda.
 */
export class VtigerLeadLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: VtigerLeadLambdaStackProps) {
    super(scope, id, props);

    const vtigerSecret = new secretsmanager.Secret(this, 'VtigerRestSecret', {
      description: 'Vtiger REST credentials for contact-form Lead creation',
    });

    const logGroup = new logs.LogGroup(this, 'VtigerLeadFunctionLogGroup', {
      retention: logs.RetentionDays.ONE_MONTH,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const vtigerLeadFunction = new lambdaNode.NodejsFunction(this, 'VtigerLeadFunction', {
      entry: path.join(__dirname, '..', 'lambda', 'vtiger-lead-handler.ts'),
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_24_X,
      timeout: cdk.Duration.seconds(15),
      memorySize: 256,
      logGroup,
      environment: {
        VTIGER_SECRET_ARN: vtigerSecret.secretArn,
        ALLOWED_ORIGIN: props.allowedOrigins.join(','),
      },
      bundling: { minify: true, forceDockerBundling: false },
    });

    vtigerSecret.grantRead(vtigerLeadFunction);

    const httpApi = new apigwv2.HttpApi(this, 'VtigerLeadHttpApi', {
      corsPreflight: {
        allowOrigins: props.allowedOrigins,
        allowMethods: [apigwv2.CorsHttpMethod.POST, apigwv2.CorsHttpMethod.OPTIONS],
        allowHeaders: ['Content-Type'],
      },
    });

    httpApi.addRoutes({
      path: '/vtiger-lead',
      methods: [apigwv2.HttpMethod.POST],
      integration: new apigwIntegrations.HttpLambdaIntegration('VtigerLeadIntegration', vtigerLeadFunction),
    });

    const cfnStage = httpApi.defaultStage?.node.defaultChild as apigwv2.CfnStage | undefined;
    if (cfnStage) {
      cfnStage.defaultRouteSettings = {
        throttlingBurstLimit: 10,
        throttlingRateLimit: 5,
      };
    }

    const webAcl = new wafv2.CfnWebACL(this, 'VtigerLeadWebAcl', {
      scope: 'REGIONAL',
      defaultAction: { allow: {} },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: 'VtigerLeadWebAcl',
        sampledRequestsEnabled: true,
      },
      rules: [
        {
          name: 'RateLimitPerIp',
          priority: 1,
          action: { block: {} },
          statement: {
            rateBasedStatement: {
              limit: 100,
              aggregateKeyType: 'IP',
            },
          },
          visibilityConfig: {
            cloudWatchMetricsEnabled: true,
            metricName: 'VtigerLeadRateLimit',
            sampledRequestsEnabled: true,
          },
        },
      ],
    });

    new wafv2.CfnWebACLAssociation(this, 'VtigerLeadWebAclAssociation', {
      resourceArn: cdk.Stack.of(this).formatArn({
        service: 'apigateway',
        resource: 'apis',
        resourceName: `${httpApi.apiId}/stages/$default`,
        arnFormat: cdk.ArnFormat.SLASH_RESOURCE_NAME,
        account: '',
      }),
      webAclArn: webAcl.attrArn,
    });

    new cdk.CfnOutput(this, 'VtigerLeadApiUrl', {
      value: `${httpApi.apiEndpoint}/vtiger-lead`,
      description: 'Set as NEXT_PUBLIC_VTIGER_LEAD_API_URL in the Next.js build environment',
    });
    new cdk.CfnOutput(this, 'VtigerSecretArn', {
      value: vtigerSecret.secretArn,
      description:
        'JSON: {"baseUrl":"https://INSTANCE.od1.vtiger.com/restapi/v1/vtiger/default","username":"...","accessKey":"...","assignedUserId":"optional","leadSource":"Web Site"}',
    });
  }
}
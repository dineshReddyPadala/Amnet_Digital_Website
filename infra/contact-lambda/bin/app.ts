#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ContactLambdaStack } from '../lib/contact-lambda-stack';

const app = new cdk.App();

// Override with -c allowedOrigins="https://www.amnetdigital.com,http://localhost:3000"
// e.g. `npx cdk deploy -c allowedOrigins=https://www.amnetdigital.com,http://localhost:3000`
const allowedOriginsContext = app.node.tryGetContext('allowedOrigins') as string | undefined;
const allowedOrigins = (allowedOriginsContext ?? 'http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

new ContactLambdaStack(app, 'AmnetContactLambdaStack', {
  allowedOrigins,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

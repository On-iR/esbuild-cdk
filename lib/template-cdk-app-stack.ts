import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class TemplateCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'sample',{
      runtime:lambda.Runtime.NODEJS_14_X,
      code:lambda.Code.fromAsset('build/lambda/sample'),
      handler:"index.handler",
    })

    new lambda.Function(this, 'trial',{
      runtime:lambda.Runtime.NODEJS_14_X,
      code:lambda.Code.fromAsset('build/lambda/trial'),
      handler:"index.handler",
    })
  }
}

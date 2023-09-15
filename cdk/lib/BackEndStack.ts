import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";
import { ITable } from "aws-cdk-lib/aws-dynamodb";

export class BackEndStack extends Stack {
  public readonly helloLambdaIntegration: LambdaIntegration;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // creating lambda functions
    const entry = join(
      __dirname,
      "..",
      "..",
      "backEnd",
      "lambda",
      "helloWord",
      "helloWord.ts"
    );
    const helloLambda = new NodejsFunction(this, "HelloLambda", {
      runtime: Runtime.NODEJS_18_X,
      handler: "handler",
      entry,
      environment: {
        TABLE_NAME: "empty for now",
      },
    });

    // creating APIGateWay
    // LambdaIntegration will be used to attached helloLambda to ApiGateway
    const helloLambdaIntegration = new LambdaIntegration(helloLambda);
    const api = new RestApi(this, "api");
    const spacesResource = api.root.addResource("v1");
    spacesResource.addMethod("GET", helloLambdaIntegration);
  }
}

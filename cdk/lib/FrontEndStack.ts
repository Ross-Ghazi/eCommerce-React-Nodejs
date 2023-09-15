import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { getSuffixFromStack } from "./helper";
import { join } from "path";
import { existsSync } from "fs";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";

export class FrontEndStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const suffix = getSuffixFromStack(this);

    const deploymentBucket = new Bucket(this, "frontEndBucket", {
      bucketName: `frontend-${suffix}`,
    });

    const uiDir = join(__dirname, "..", "..", "frontEnd", "dist");
    if (!existsSync(uiDir)) {
      console.warn("frontend file was  not found: " + uiDir);
      return;
    }

    // populates an S3 bucket with the contents of .zip files from other S3 buckets or from local disk.
    new BucketDeployment(this, "frontEndDeployment", {
      destinationBucket: deploymentBucket,
      sources: [Source.asset(uiDir)],
    });

    const originIdentity = new OriginAccessIdentity(
      this,
      "OriginAccessIdentity"
    );
    deploymentBucket.grantRead(originIdentity);

    //create cloudFront
    const distribution = new Distribution(this, "frontEndDistribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: new S3Origin(deploymentBucket, {
          originAccessIdentity: originIdentity,
        }),
      },
    });

    //print out cloudFront url
    new CfnOutput(this, "SpaceFInderUrl", {
      value: distribution.distributionDomainName,
    });
  }
}

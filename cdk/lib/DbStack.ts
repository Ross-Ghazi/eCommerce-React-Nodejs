import { Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import { getSuffixFromStack } from "./helper";

export class DataStack extends Stack {
  public readonly shopTable: ITable;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const suffix = getSuffixFromStack(this);

    this.shopTable = new Table(this, "shop", {
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      tableName: `shop-${suffix}`,
    });
  }
}

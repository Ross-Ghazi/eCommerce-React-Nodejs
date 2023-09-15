#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { BackEndStack } from "../lib/BackEndStack";
import { FrontEndStack } from "../lib/FrontEndStack";
import { DataStack } from "../lib/DbStack";

const app = new cdk.App();

const dataStack = new DataStack(app, "e-commerce-db");
new BackEndStack(app, "e-commerce-backend", {
  shopTable: dataStack.shopTable,
});
new FrontEndStack(app, "e-commerce-frontend");

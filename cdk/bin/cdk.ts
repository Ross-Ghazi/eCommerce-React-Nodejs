#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { BackEndStack } from "../lib/BackEndStack";
import { FrontEndStack } from "../lib/FrontEndStack";

const app = new cdk.App();
new BackEndStack(app, "e-commerce-backend");
new FrontEndStack(app, "e-commerce-frontend");

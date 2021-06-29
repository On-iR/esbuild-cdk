#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';

import { TemplateCdkAppStack } from '../lib/template-cdk-app-stack';

const app = new cdk.App();
new TemplateCdkAppStack(app, 'TemplateCdkAppStack');

// Copyright 2016-2018, Pulumi Corporation.  All rights reserved.

import * as azure from "@pulumi/azure";
import * as pulumi from "@pulumi/pulumi";

// Parse and export configuration variables for this stack.
const config = new pulumi.Config();
export const CLIENT_ID = config.require("CLIENT_ID");
export const CLIENT_SECRET = config.require("CLIENT_SECRET");
export const location = config.get("location") || "East US";
export const nodeCount = config.getNumber("nodeCount") || 2;
export const nodeSize = config.get("nodeSize") || "Standard_D2_v2";
export const sshPublicKey = config.require("sshPublicKey");
export const resourceGroupName = config.require("RESOURCE_GROUP_NAME");

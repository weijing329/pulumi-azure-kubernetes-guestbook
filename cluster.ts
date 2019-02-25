// Copyright 2016-2018, Pulumi Corporation.  All rights reserved.

import * as azure from "@pulumi/azure";
import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import * as config from "./config";

// Now allocate an AKS cluster.
export const k8sCluster = new azure.containerservice.KubernetesCluster("aksCluster", {
    resourceGroupName: config.resourceGroupName,
    location: config.location,
    agentPoolProfile: {
        name: "aksagentpool",
        count: config.nodeCount,
        vmSize: config.nodeSize,
    },
    dnsPrefix: `${pulumi.getStack()}-kube`,
    linuxProfile: {
        adminUsername: "aksuser",
        sshKeys: [{
            keyData: config.sshPublicKey,
        }],
    },
    servicePrincipal: {
        clientId: config.CLIENT_ID,
        clientSecret: config.CLIENT_SECRET,
    },
}); 

// Expose a K8s provider instance using our custom cluster instance.
export const k8sProvider = new k8s.Provider("aksK8s", {
    kubeconfig: k8sCluster.kubeConfigRaw,
});

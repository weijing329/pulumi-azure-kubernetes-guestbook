import * as pulumi from "@pulumi/pulumi";
import * as k8sjs from "./k8sjs";

let config = new pulumi.Config();

let redisMaster = new k8sjs.ServiceDeployment("redis-master", {
    image: "k8s.gcr.io/redis:e2e",
    ports: [6379]
});

let redisSlave = new k8sjs.ServiceDeployment("redis-slave", {
    image: "gcr.io/google_samples/gb-redisslave:v1",
    ports: [6379]
});

let frontend = new k8sjs.ServiceDeployment("frontend", {
    replicas: 3,
    image: "gcr.io/google-samples/gb-frontend:v4",
    ports: [80],
    allocateIpAddress: true,
    useLoadBalancer: config.getBoolean("useLoadBalancer")
});

export let frontendIp = frontend.ipAddress;

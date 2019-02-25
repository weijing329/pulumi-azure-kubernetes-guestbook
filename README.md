# Pulumi Azure AKS Guestbook
An Azure TypeScript Pulumi program deploys Guestbook App with Redis replication and Nginx Load Balancer

## Setup Azure credentials (Service Principal) & Pulumi Azure Configuation
refer to [Pulumi - Microsoft Azure Setup](https://pulumi.io/quickstart/azure/setup.html)

## Pulumi Stack Configuation
specific configuration for this pulumi stack
```sh
pulumi config set pulumi-azure-kubernetes-guestbook:CLIENT_ID <Azure AD Application (client) ID>
pulumi config set pulumi-azure-kubernetes-guestbook:CLIENT_SECRET <Azure AD Application password> --secret
pulumi config set pulumi-azure-kubernetes-guestbook:RESOURCE_GROUP_NAME <Azure Resource Group Name>
pulumi config set pulumi-azure-kubernetes-guestbook:useLoadBalancer true
pulumi config set pulumi-azure-kubernetes-guestbook:location <Azure Resource Location>
pulumi config set pulumi-azure-kubernetes-guestbook:sshPublicKey <Azure VM SSH Access Public Key>
```

## Pulumi Stack Deployment
```sh
pulumi up
```
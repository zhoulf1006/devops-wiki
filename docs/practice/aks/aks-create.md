---
id: aks-create
title: Deploy AKS
---


#### check azure CLI version

```shell
az --version
```

#### install aks necessary extension

```shell
//list extensions
az extension list-available --output table

//install aks-preview
az extension add --name aks-preview
```

#### azure CLI login

```shell
az login
```

#### azure CLI show accounts

```shell
az account show -o table
```

#### azure CLI set subscription

```shell
az account set --subscription=dev-aloong-us
```

#### check Azure Monitor related providers registered or not

```shell
az provider show -n Microsoft.OperationsManagement -o table
az provider show -n Microsoft.OperationalInsights -o table
```

#### register Azure Monitor related providers

```shell
az provider register --namespace Microsoft.OperationsManagement
az provider register --namespace Microsoft.OperationalInsights
```

#### create first resource group for kubernetes service resource

```shell
az group create --name rg-aks-aloong-dev-wu --location westus
```

> Note: provide the second resource group name when creating the aks cluster if you want. Otherwise, aks cluster will create it automatically with the name like '*MC_resourcegroupname_clustername_location*'
>
> specify the second resource group for aks cluster infra(nodes, networking and storage etc.)
>
> resource-group-name: rg-cas-aks-infra-dev-wu

#### create network and subnet within another resource group

```shell
az group create --name rg-aks-networks-dev-wu --location westus

az network vnet create -g rg-aks-networks-dev-wu \
        -n vnet-aks-aloong-dev-wu \
        --address-prefix 10.169.0.0/16 \
           --subnet-name aks-subnet \
           --subnet-prefix 10.169.0.0/17
```

#### get the created subnet id

```shell
az network vnet subnet list --resource-group rg-networks-aks-dev-wu \
          --vnet-name vnet-aks-aloong-dev-wu \
          --query "[0].id" --output tsv
```

#### create public ip prefix(optional)

```shell
az group create --name rg-aks-networks-dev-wu --location westus
az network public-ip prefix create --length 30
            --location westus
            --name aks-ip-prefix-dev-wu
           --resource-group rg-networks-aks-dev-wu
```

#### get the created ip prefix id

```shell
az network public-ip prefix show --resource-group rg-networks-aks-dev-wu \
          --name aks-ip-prefix-dev-wu \
          --query "id" --output tsv
```

#### create a service principal
The service principal is created for acrpull role assignment.
We don't need to ceate new one here because we'll use the dev-wu's app sp.
```shell
az ad sp create-for-rbac --name aks-sp-dev-wu  --skip-assignment --years 5
```
Save the output to a file in case we'll use later.

#### create aks cluster

```shell
az aks create --name aks-aloong-dev-wu \
              --resource-group rg-aks-aloong-dev-wu \
              --kubernetes-version 1.22.4 \
              --location westus \
              --vm-set-type VirtualMachineScaleSets \
              --node-vm-size Standard_DS2_v2 \
              --node-osdisk-size 512 \
              --nodepool-name linuxpool1 \
              --node-resource-group rg-aks-infra-aloong-dev-wu \
              --node-count 2 \
              --enable-cluster-autoscaler \
              --min-count 2 \
              --max-count 10 \
              --admin-username casuser \
              --generate-ssh-keys \
              --service-principal <sp-id> \
              --client-secret <sp-password> \
              --network-plugin azure \
              --vnet-subnet-id <sunet-id> \
              --service-cidr 10.170.0.0/24 \
              --dns-service-ip 10.170.0.10 \
              --docker-bridge-address 172.17.0.1/16 \
              --load-balancer-sku standard \
              --attach-acr casdevreg \
              --dns-name-prefix aks-aloong-dev-wu \
              --enable-addons monitoring
```

#### install kubectl

install-cli should run with sudo

```shell
sudo az aks install-cli
```

#### configure `kubectl` to connect to  aks cluster

`get-credentials` get the credentials for specific aks cluster and store them under current user's `${HOME}/.kube/config`

```shell
az aks get-credentials --resource-group rg-aks-aloong-dev-wu --name aks-aloong-dev-wu
```

#### delete aks cluster

```shell
az aks delete --name aks-aloong-dev-wu --resource-group rg-aks-aloong-dev-wu
```

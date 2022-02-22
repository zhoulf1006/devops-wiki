---
id: k8s-log-mgmt
title: K8s Log Management
---


应用和系统日志可以让你了解集群内部的运行状况。日志对调试问题和监控集群活动非常有用。针对容器化应用，最简单且受欢迎的日志记录方式就是写入标准输出和标准错误流。

由于容器、Pod会出现崩溃或者节点宕机等情况，如果能够仍然访问到日志(应用和系统日志)，就必须使日志具备独立的存储和生命周期，与节点、Pod或容器的生命周期独立，即集群级日志，需要一个独立的后台存储、分析和查询日志。

## log类型

**系统组件log**

包含在容器中运行的系统组件和不在容器中运行的系统组件(包括容器运行时)。

(1) 在使用 systemd 机制的服务器上，kubelet 和容器 runtime 写入日志到 journald。 如果没有 systemd，他们写入日志到 `/var/log` 目录的 `.log` 文件。

(2) 容器中的系统组件通常将日志写到 `/var/log` 目录，绕过了默认的日志机制。

**应用log**

(1) 如果容器应用log输出到了标准输出，则容器log存放在节点目录`/var/lib/docker/containers/CONTAINER-ID/*.log`。另外在节点中有创建`/var/log/containers/NAMESPACE_POD-NAME-*/POD-NAME/*.log`, 这些log文件是指向容器log的连接文件。除了直接去节点里查看log，还可以使用`kubectl logs`命令去查看对应容器的log。

(2) 如果容器应用log被打印到一个自定义mount路径的volume中，则容器log被存储在节点上对应的路径上，此时使用`kubectl logs`命令去查看则不会看到任何log。

## 需要解决的log问题

(1) 实现log的轮转，包括k8s系统log以及应用log，保证log不会消耗节点上所有的存储空间

(2) 提供log持久化存储、分析和查看的解决方案，即集群级日志架构。需要的考虑的问题：

- log的大小、格式、文件格式等
- 不同microservice如何区分
- 选择何种log架构

## 集群级日志架构

可选的方案：

- 使用在每个节点上运行的节点级日志记录代理
- 在应用程序的 pod 中，包含专门记录日志的 sidecar 容器
- 将日志直接从应用程序中推送到日志记录后端

#### 使用节点级日志代理

![使用节点日志记录代理](./images/logging-with-node-agent.png)

通过在每个节点上使用 *节点级的日志记录代理* 来实现群集级日志记录，日志记录代理是一种用于暴露日志或将日志推送到后端的专用工具。 通常，日志记录代理程序是一个容器，它可以访问包含该节点上所有应用程序容器的日志文件的目录。

#### 使用 sidecar 容器和日志代理

可以通过以下方式之一使用 sidecar 容器：

- sidecar 容器将应用程序日志传送到自己的标准输出
- sidecar 容器运行一个日志代理，配置该日志代理以便从应用容器收集日志

##### 传输数据流的 sidecar 容器

![数据流容器的 Sidecar 容器](./images/logging-with-streaming-sidecar.png)

##### 具有日志代理功能的 sidecar 容器

![日志记录代理功能的 sidecar 容器](./images/logging-with-sidecar-agent.png)

#### 从应用中直接暴露日志目录

![直接从应用程序暴露日志](./images/logging-from-application.png)



**References:**

https://kubernetes.io/zh/docs/concepts/cluster-administration/logging/

https://zdyxry.github.io/2019/05/17/Kubernetes-%E5%AE%9E%E6%88%98-%E6%97%A5%E5%BF%97%E5%A4%84%E7%90%86/


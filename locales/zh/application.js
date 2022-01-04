/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */
module.exports = {
  'According to the HTTP header': '根据 HTTP header',
  'Add Component': '添加组件',
  'Add Component Successfully': '添加组件成功',
  'Add an Internet access rule for the application': '为应用添加外网访问规则',
  'Add New Component': '添加新组件',
  'App store deployment': '应用商店部署',
  'App Template': '应用模板',
  'App Types': '应用的类型',
  APP_ICON_TIP: '点击上传应用图标，尺寸最大为 120px * 120px',
  application: '应用',
  'Application Component': '应用组件',
  APP_COMPONENT_PL: '应用组件',
  'Application components combine workloads and services as components in applications':
    '应用组件组合了工作负载和服务作为应用中的组件',
  'Application governance is not enabled': '应用治理未开启',
  'Application Icon': '应用图标',
  'Application Route': '应用路由',
  APP_VERSION: '应用版本',
  'Base ejection time (s)': '短隔离时间(s)',
  'Based on HTTP cookie': '根据 HTTP cookie',
  'Based on HTTP header': '根据 HTTP header',
  'Build an app by app template': '应用模板部署',
  'Build an app by services': '通过服务构建应用',
  'Called Depth': '调用深度',
  'Called Services': '调用服务',
  'Choose existing services or create new service components to build an app':
    '选择已有服务或者新建服务组件来构建应用',
  'Circuit Breaker': '熔断器',
  'Cluster Select': '集群选择',
  'Cluster Selection': '集群选择',
  'Component Version': '组件版本',
  'Composing App': '自制应用',
  'Connection pool management': '连接池管理',
  'Connection timeout': '连接超时时间',
  'Continuous error response (5xx) number': '连续错误响应(5xx)个数',
  'Create Application by Service': '通过服务构建应用',
  'Current Version': '当前版本',
  DEPLOY: '部署',
  'Deploy App': '部署应用',
  'Deploy applications with one-click application templates provided by Kubesphere':
    '通过 Kubesphere 提供的应用模板一键部署应用',
  'Deploy sample app Bookinfo': '部署示例应用 Bookinfo',
  'From third party Helm': '来自第三方 Helm',
  'Hash based on a specific HTTP header.': '根据 HTTP header 中的内容获取哈希',
  'Hash based on HTTP cookie.': '根据 HTTP cookie 中的内容获取哈希',
  'Hash based on the source IP address.': '根据源 IP 获取哈希',
  'How to use Application Governance': '如何使用应用治理',
  'If the maximum number of requests in the backend connection is set to 1, the keep alive feature is disabled.':
    '对后端连接中最大的请求数量若设为1则会禁止 keep alive 特性。',
  'If you need to access applications by application route, add routing rules':
    '如果您需要将应用通过应用路由的方式进行访问，请添加路由规则',
  'Inspection period (unit: s)': '检查周期(单位: s)',
  'Load balance algorithm': '负载均衡算法',
  Log: '日志',
  'Max number of connections': '最大连接数',
  'Max number of requests per connection': '每条连接最大请求数',
  'Max request retries': '最大请求重试次数',
  'Maximum pending requests': '最大等待请求数(等待列队的长度)',
  'Maximum requests': '最大请求数',
  METHOD: '方式',
  'No Components': '未发现组件',
  'No result found': '未查询到结果',
  Off: '关闭',
  On: '开启',
  'Please finish the sub form first': '请完成子表单的编辑',
  'Please input an application name': '请输入应用名称',
  'Please input component version': '请输入组件版本',
  'Pod isolation ratio (unit: %)': '容器组隔离比例(单位: %)',
  Process: '进程',
  Receive: '接收',
  Rollback: '回滚',
  'Sample apps can help you get started with app creation and app governance':
    '示例应用可以帮助您快速入手应用创建, 以及应用治理功能',
  Send: '发送',
  'Service components should not be empty': '服务组件不能为空',
  SERVICE_PORTS: '服务端口',
  SERVICE_PORT_NAME_DESC:
    '端口的名字必须遵循如下格式 <protocol>[-<suffix>]，可以是 http、http2、 grpc、 mongo、 或者 redis 作为 <protocol> ，这样才能使用 Istio 的路由功能。例如 name: http2-foo 和 name: http 都是有效的端口名称，而 name: http2foo 不是。',
  'Services & Operations': '服务与操作',
  'Session retention': '会话保持',
  'Success rate': '成功率',
  Tags: '标签',
  'TCP connection timeout.': 'TCP连接超时时间。',
  'The maximum number of HTTP1 or TCP connections to the target host.':
    '到目标主机HTTP1或TCP连接的最大数量。',
  'The maximum number of retries to the target host within the specified time.':
    '在指定时间内对目标主机最大重试次数。',
  'The number of consecutive 5xx errors in one inspection cycle':
    '在一个检查周期内连续出现5xx错误的个数',
  'The response code will be filtered in the inspection cycle.':
    '将会对检查周期内的响应码进行筛选',
  TOTAL_COLLECTIONS: '共计 {num} 个接收器',
  Traffic: '流量',
  'Traffic (requests per second)': '流量(每秒请求)',
  'Traffic Monitoring': '流量监测',
  Upgrade: '升级',
  'Workload Type': '负载类型',
  TOTAL_APPS: '共计 {num} 个应用',
  LB_ALG_DESC:
    '支持标准的负载均衡算法</br>ROUND_ROBIN：轮询，默认负载均衡算法。</br>LEAST_CONN：随机选取两个健康的主机，再从所选取的两个主机中选择一个链接数较少的主机。</br>RANDOM：从所有健康的主机中，随机选取一个。',
  LB_ROUND_ROBIN: '轮询(ROUND_ROBIN)',
  LB_LEAST_CONN: '最小连接数(LEAST_CONN)',
  LB_RANDOM: '随机(RANDOM)',
  APP_WORKLOAD_TYPE_DESC: '支持无状态服务(部署)及有状态服务(有状态副本集)',
  TYPE_SERVICE_DEPLOYMENT: '类型：无状态服务（部署）',
  TYPE_SERVICE_STATEFULSET: '类型：有状态服务（有状态副本集）',
  CONNECTION_POOL_TIP:
    '为应用程序创建固定数量的连接对象，保存在池中进行复用。每次访问时会从池中获取已存在的连接对象，使用完毕后，连接对象将返回池中。',
  POD_ISOLATION_RATIO_DESC:
    '允许容器组被隔离的最大比例。采用向上取整，若10个实例，设为13%则最多会隔离2个实例',
  BASE_EJECTION_TIME_DESC:
    '容器组第一次被隔离的时间，之后每次隔离时间为次数与最短隔离时间的乘积',
  CIRCUIT_DESC:
    '熔断机制是应对雪崩效应的一种微服务链路保护机制。当算出链路的某个微服务不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。当检测到该节点微服务调用响应正常后，恢复调用链路。',
  'Last {hour} hour': '最近 {hour} 小时',
  'Last {hour} hours': '最近 {hour} 小时',
  'Last {day} days': '最近 {day} 天',
  WORKLOAD_NAME_EXIST: '工作负载 {name} 已存在',
  TIP_APP_TYPE:
    'KubeSphere 支持来自于应用商店和应用仓库的应用部署(基于 Helm)，同样也支持自制应用 (Application CRD)。',
  TIP_APP_GOVERNANCE:
    '使用应用治理需要创建自制应用并对每项服务开启服务治理功能',
  APP_REPOS_DESC:
    '应用仓库来自于第三方的 Helm Chart Repo，通过可视化的方式在 KubeSphere 中展示并提供部署及管理功能，用户可以基于应用仓库中的模板快速地一键部署应用。',
  TRAFFIC_MANAGEMENT_NO_MICROSERVICE_TIP:
    '流量治理依赖于微服务模块, 当前集群未开启微服务模块',
  TRACING_NO_MICROSERVICE_TIP: '请在当前集群中开启应用治理组件。',
}

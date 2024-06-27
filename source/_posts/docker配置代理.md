---
title: docker配置代理
categories:
  - docker
tags:
  - docker
abbrlink: c8e05f01
date: 2024-06-16 22:41:34
---

## docker配置代理

### 老方法配置 proxy.conf
1. 创建配置文件目录
```bash
mkdir -p /etc/systemd/system/docker.service.d
```
2. 创建配置文件
```bash
cat > /etc/systemd/system/docker.service.d/proxy.conf <<EOF
[Service]
Environment="HTTP_PROXY=http://192.168.3.3:7890/" 
Environment="HTTPS_PROXY=http://192.168.3.3:7890/"
Environment="NO_PROXY=localhost,127.0.0.1,hub.docker.com,registry.aliyuncs.com"
EOF
```

3. 重启docker
```bash
systemctl daemon-reload && systemctl restart docker
systemctl show --property=Environment docker    # 查看配置
```

### 新方法
对config.json 文件进行修改
```bash
mkdir -p ~/.docker
cat > ~/.docker/config.json <<EOF
{
 "proxies":
 {
   "default":
   {
     "httpProxy": "http://192.168.3.3:8889",
     "httpsProxy": "http://192.168.3.3:8889",
     "noProxy": "127.0.0.1,docker.io,hub.docker.com,hub-mirror.c.163.com,pvjhx571.mirror.aliyuncs.com"
   }
 }
}
EOF
```
#将 "httpProxy" 和 "httpsProxy" 的值替换为你的代理服务器地址和端口。
#注意："noProxy": 指定不需要使用代理的地址列表，通常包括本地地址。


## 使用国外的docker镜像源
__注意需要魔法__
#如果需要将 Docker 镜像下载代理到国外 Docker 官网或其他国外镜像源，可以使用以下方法：
在 daemon.json 中配置如下：
```bash
{
  "registry-mirrors": ["https://your-registry-mirror-url"]
}
```



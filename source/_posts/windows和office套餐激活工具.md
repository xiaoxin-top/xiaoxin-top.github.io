---
title: windows和office套餐激活工具
tags:
  - windows
  - office
categories:
  - 干货
abbrlink: 41ec75e8
date: 2024-06-30 01:12:46
cover: https://pic.imgdb.cn/item/66804a97d9c307b7e91eaabb.png
# cover: https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/1e/bc/23/1ebc2320-6fd1-013e-8b0f-27d63bc05512/mzl.ehivcvqm.png/512x512bb.jpg
---

# 此文章分为两部分：
- Mirosoft套餐激活工具
- Windows系统激活工具


## Mirosoft套餐激活工具
1) [下载:__Office Tool Plus__](https://otp.landian.vip/zh-cn/download.html)
2) 选择对应的镜像和对应的版本点击下载即可：
![官网](https://pic.imgdb.cn/item/66804492d9c307b7e9181107.png)
3) 下载安装压缩包后解压，找到 __Office Tool Plus.exe__ 右键管理员运行：
![解压包的文件](https://pic.imgdb.cn/item/66804546d9c307b7e918f812.png)
4) 打开应用后、选择部署的产品：
![选择部署的产品](https://pic.imgdb.cn/item/66804676d9c307b7e91a229b.png)
5) 激活
- 方法1：
![激活产品](https://pic.imgdb.cn/item/66804782d9c307b7e91b7037.png)
- 方法2：
如果方法1激活失败，可以尝试使用方法2激活：
在工具中按 __ctrl+shift+p__，再输入 __ospp /insLicID MondoVolume /sethst:kms.loli.best /setprt:1688 /act__
![激活方法2](https://pic.imgdb.cn/item/66804924d9c307b7e91cf6be.png)
6) 打开相应的产品查看是否已激活

***

## Windows系统激活工具
- 这是一个github开源的项目，获得了84.6k stat
[原项目地址](https://github.com/massgravel/Microsoft-Activation-Scripts)
![github图标](https://camo.githubusercontent.com/4de5ba22ebf14d7e4d9a63b770d2ac02c2958f92b0c045ba4ce8b86c6e216f68/68747470733a2f2f6d61737367726176652e6465762f696d672f6c6f676f5f736d616c6c2e706e67)
__此软件是由GitHub托管，并已经获取最近更新。激活工具集合了KMS38/HWID/激活180天等等。还可以激活Windows Office办公软件，本博客推荐使用HWID方式激活系统。__

### 如何使用
- 方法一：
1. PowerShell 命令行安装 (__推荐__)
> 打开你的 Windows，右键单击 Windows 开始菜单并选择 PowerShell 或终端（不是 CMD）。复制并粘贴如下代码，然后按回车键：
![powershell](https://pic.imgdb.cn/item/66804f47d9c307b7e92446e6.png)
```powershell
irm https://get.activated.win | iex

#如果第一次执行报错，关闭后在执行即可
```
2. 执行命令后会弹出窗口：
![窗口](https://pic.imgdb.cn/item/66804f47d9c307b7e9244713.png)
3. 按照上图选择相应**数字**的激活方式即可

- 方法二：（不建议）
1. 下载源文件 
> 从 GitHub 上下载开源文件。
> 解压缩下载的 zip 文件。
> 在解压的文件中找到名为 All-In-One-Version 的文件夹。
> 运行名为 MAS_AIO.cmd 的文件。
> 按照屏幕上的说明即可轻松激活您的软件。
![github源文件](https://pic.imgdb.cn/item/66805084d9c307b7e92567a5.png)

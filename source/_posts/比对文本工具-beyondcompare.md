---
title: 最好用的比对工具-beyondcompare
categories:
  - 干货
tags:
  - 比对工具-beyondcompare
abbrlink: 4d33b968
date: 2024-06-17 11:18:37
cover:
---

## beyondcompare 
![img](https://www.scootersoftware.com/bc_icon.png)

> Beyond Compare是一套由Scooter Software推出的内容比较工具软件。除了可以作文件比较以外，还可以比对文件目录、FTP目录及压缩包案的内容等。
> 
> 因为这些功能，Beyond Compare被应用于版本控制及资料同步的工作上
>> 这是一款流行的比对工具,主要的功能如下：
> - 比较文件，文件夹
> - 比较Excel文件
> - 比较Word文件
> - 图片比较
> - 合并两个文件内容
> - 合并两个文件夹

## 安装
[官网下载链接：byendcompare4-download](https://www.scootersoftware.com/download)
1. 下载安装包
**注意**：按照系统版本下载安装包
2. 安装
    - 运行安装包，选择安装位置，点击安装
3. 打开即可

**注意**：由于这是免费版本的只有30天的试用期，所以需要下边的方法来重置一下试用期

## 方法一：
**注意:最新版本好像没有BCompare.ini这个文件**
> 修改C:\Users\Administrator\AppData\Roaming\BCompare\BCompare.ini这个配置文件中的时间戳来使软件一直处于试用期。
>
> BCompare.ini文件的内容大致如下：
> ```
> [BCompare]
> InstallTime=1534816784
> LastLoading=1538200843
> ```

#写一个脚本实现开机执行修改时间：
#把脚本文件放到C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\这个目录下就就可以开机自启了。
**这是一个python脚本**
```bash

import time  
f = open("C:\\Users\\Administrator\\AppData\\Roaming\\BCompare\\BCompare.ini","r+")  
f_content = f.readlines()  
f.seek(0,0)  
f.truncate()  
t = str(int(time.time()))  
f.write(f_content[0])  
f.write(f_content[1][:12] + t + "\n")  
f.write(f_content[2][:12] + t + "\n") 

f.close() 
```


## 方法二：
> 修改C:\Program Files\Beyond Compare 4\BCUnrar.dll
>
> 这个文件重命名或者直接删除，则会新增30天试用期，再次打开提示还有28天试用期。
> **注意**：也可以写一个脚本将这个文件重命名或者直接删除

## 方法三：修改注册表
> 1、在搜索栏中输入 regedit  ，打开注册表
> 2、 删除项目：计算机\HKEY_CURRENT_USER\Software\ScooterSoftware\Beyond Compare 4\CacheId
> **注：**此方法写一个脚本文件，每次开机的时候去删除注册表中的CacheId，同样能达到一直处于试用期的效果,结合方法4的bat文件即可

## 方法四：本地手动执行bat文件
> 将一下代码保存成txt后，修改后缀名为bat
> ```
> reg delete "HKEY_CURRENT_USER\Software\Scooter Software\Beyond Compare 4" /v CacheID /f
> ```
> 当beyongd软件剩余时间不多时候，运行此bat，重新打开软件即可剩余时间为三十天

```
#解析上面的语句：
reg delete：这是一个命令，用于删除注册表中的键值对或键。
"HKEY_CURRENT_USER\Software\Scooter Software\Beyond Compare 4"：这是注册表路径，指定了与当前用户相关的Beyond Compare 4软件的注册表位置。
/v CacheID：这指定要删除HKEY_CURRENT_USER\Software\Scooter Software\Beyond Compare 4键中名为CacheID的特定注册表数值。
/f：这个选项强制执行删除操作，而不会提示确认。
```
**这条命令的作用是删除注册表路径 HKEY_CURRENT_USER\Software\Scooter Software\Beyond Compare 4 中名为 CacheID 的注册表数值（键值对）。**



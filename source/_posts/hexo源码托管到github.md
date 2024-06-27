---
title: hexo源码托管到github🤏
categories: 干货
tags: github托管,个人博客
abbrlink: d67f438b
date: 2024-06-28 00:54:27
---
# 步骤
1. 创建github仓库
2. 将创建好的仓库clone到本地
3. 将源码文件拷贝到clone到本地的目录
4. push源码到github

## 1.创建github仓库
![create repo](https://pic.imgdb.cn/item/667d9907d9c307b7e9482722.png)

## 2.将创建好的仓库clone到本地
1) __在本地的一个目录下右键打开 *Open Git Bash here*__
![Open Git Bash here](https://pic.imgdb.cn/item/667d9b4bd9c307b7e94c3396.png)
2) __下载的文件夹里仅留下.git 文件夹，其他的文件都删除__
3) __找见我们源码的位置，将源码内的所以文件和目录（除.deploy_git 以外）都复制到clone下来的文件夹中（xxxx.github.io）__
**如果已经clone过主题文件，那么需要把theme主题文件夹里的 .git 也删除。因为git不能嵌套上传，最好是显示隐藏文件，检查一下有没有，否则上传的时候会出错，导致你的主题文件无法上传，这样你的配置在别的电脑上就用不了了。**
***注意：现在clone下来的文件夹内应该有个.gitignore文件，用来忽略一些不需要的文件，表示这些类型文件不需要git。如果没有，右键新建，内容如下：***
```markdown
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
```
4) __大概目录如下__
![dir](https://pic.imgdb.cn/item/667d9ca6d9c307b7e94e633a.png)

## 3.将源码push到github
1) __在clone下来的文件夹内(xxxx.github.io)打开 *Open Git Bash here*__
2) __依次输入命令：__
```bash
git add .   #添加所有文件
git commit -m "first commit"    #备注
git push #推送到github
```
3) __此时已经成功将整个网站推送到了远程库__✅
![push](https://pic.imgdb.cn/item/667d9e4bd9c307b7e951197a.png)
4) __如果要更新，只需要将本地的代码更新到本地，然后push到远程库即可__🤙

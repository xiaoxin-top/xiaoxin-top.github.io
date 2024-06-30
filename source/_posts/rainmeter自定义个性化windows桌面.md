---
title: rainmeter自定义个性化windows桌面
tags:
  - windows
  - rainmeter
categories:
  - 干货
abbrlink: 1c9e63ed
date: 2024-06-29 13:35:57
---

__效果如下：__
![桌面效果](https://pic.imgdb.cn/item/667f9fead9c307b7e91156ee.png)
__主题包__:
[提取码：6ij4](https://www.alipan.com/s/p645sPEZxhF)

**如果使用我的皮肤包，只需下载主题包解压后将目录放到*C:\Users\Administrator\Documents\Rainmeter\Skins*即可**

## 1.下载rainmeter
[下载地址](https://www.rainmeter.net/download)

## 2.安装 一直按下一步即可
- 效果如下：
![安装](https://pic.imgdb.cn/item/667fa11bd9c307b7e912d511.png)

## 3.下载主题
- 这里有很多主题，可以按自己的风格下载安装即可
[下载地址](https://zhutix.com/tag/rainmeter/?post_order=views)
- 我这里下载
  - Welfare
  - RetrOcOlOr

- 然后在这个基础上自定义自己的桌面

## 4.自定义桌面（代码的解析）
- 图标代码：
![](https://pic.imgdb.cn/item/667fa368d9c307b7e9169882.png)

- 代码解析：（注意这是rainmeter的安装路径）
    - 在主题文件中：C:\Users\Administrator\Documents\Welfare\@Resources\Variables.inc 找到这个变量文件打开：
```rainmeter

; Rainmeter Variables
[Variables]
Author=Morteza Nasirivand
Language=English
Location=IRXX0018
Unit=f
Format=H
Hidden=0
Hidden2=1
Player=WMP

;图标变量
;如果有多个图标按这个格式添加即可

;如这里是 我的电脑 打开的图标
LinkIcon1NameAndPath=#@#\MyComputer.png			;图标原始状态
HoverIcon1NameAndPath=#@#\MyComputer-1.png		;鼠标放到图标后的变化的图标
Link1Text=myComputer							;图标名
LinkLocationPath1=["shell:MyComputerFolder"]	;点击图标后做的动作、如打开相应的应用或链接网站

LinkIcon2NameAndPath=#@#\google-1.png
HoverIcon2NameAndPath=#@#\google.png
Link2Text=google
LinkLocationPath2=["C:\Program Files\Google\Chrome\Application\chrome.exe"]

LinkIcon3NameAndPath=#@#\github.png
HoverIcon3NameAndPath=#@#\github-4.png
Link3Text=github.com
LinkLocationPath3=!Execute ["https://github.com"]

PythonImgPath1=#@#\python-3.png
PythonImgPath2=#@#\python-5.png
PythonLinkText=pycharm
PythonAppPath=!Execute ["D:\install\pycharm\PyCharm 2022.2.5\bin\pycharm64"]

LinkIcon5NameAndPath=#@#\gmail-1.png
HoverIcon5NameAndPath=#@#\gmail.png
Link5Text=gmail
LinkLocationPath5=!Execute ["https://mail.google.com/mail/u/1/#inbox/"]


LinkIcon6NameAndPath=#@#\youtube-1.png
HoverIcon6NameAndPath=#@#\youtube-2.png
Link6Text=youtube
LinkLocationPath6=!Execute ["https://www.youtube.com/"]


LinkIcon7NameAndPath=#@#\terminal-1.png
HoverIcon7NameAndPath=#@#\terminal-2.png
Link7Text=youtube
LinkLocationPath7=!Execute ["wt"]

LinkIcon8NameAndPath=#@#\music.png
HoverIcon8NameAndPath=#@#\music-1.png
Link8Text=kugou
LinkLocationPath8=!Execute ["D:\install\kugou\KGMusic\KuGou.exe"]

LinkIcon9NameAndPath=#@#\bi-1.png
HoverIcon9NameAndPath=#@#\bi.png
Link9Text=bilibili
LinkLocationPath9=!Execute ["https://www.bilibili.com/"]

LinkIcon10NameAndPath=#@#\wechat.png
HoverIcon10NameAndPath=#@#\wechat-1.png
Link10Text=wechat
LinkLocationPath10=!Execute ["D:\install\wechat\WeChat.exe"]

LinkIcon11NameAndPath=#@#\note.png
HoverIcon11NameAndPath=#@#\note-1.png
Link11Text=joplin
LinkLocationPath11=!Execute ["C:\Program Files\Joplin\Joplin.exe"]

ClashImgPath1=#@#\vpn-3.png
ClashImgPath2=#@#\vpn-1.png
ClashLinkText=clash
ClashAppPath=!Execute ["D:\OperationTools\Clash.for.Windows-0.20.39-win\Clash for Windows"]

VmwareImgPath1=#@#\vm-2.png
VmwareImgPath2=#@#\vm-2.png
VmwareLinkText=vmware
VmwareAppPath=!Execute ["D:\installsoft\VM\vmware.exe"]

XtermImgPath1=#@#\xterm-1.png
XtermImgPath2=#@#\xterm-2.png
XtermLinkText=vmware
XtermAppPath=!Execute ["D:\install\Xterm\MobaXterm\MobaXterm"]

TeleImgPath1=#@#\telegram.png
TeleImgPath2=#@#\telegram-2.png
TeleLinkText=telegram
TeleAppPath=!Execute ["D:\install\telegram\Telegram Desktop\Telegram.exe"]
```

    - 打开 C:\Users\Administrator\Documents\Rainmeter\Skins\Welfare\Links
    - 这是桌面图标的配置文件
    - 代码解析：
```rainmeter
[Rainmeter]
Update=-1
Author=Morteza Nasirivand
DynamicWindowSize=1
AccurateText=1

[Metadata]
Name=
Author=
Information=
License=
Version=

;NOTES:
;If you are not familiar with Rainmeter from earlier,please don't edit anything!
;It's too complicated and sensitive,if you don't know what you doing!

[Variables]
@include=#@#Variables.inc
IconTimeWaiting=4
TextTimeWaiting=8
Size1=0
Size2=0
Size3=0
Size4=0
Size5=0
Size6=0
Size7=0


;-------------------------------------------------------------
;-------------------------------------------------------------

;这里设置底部的水平线 SolidColor=12,201,255 颜色
;Meter=Image: 这个参数指定了元素类型，即一个图像元素，尽管在这种情况下它被用来表示一条线
;X=20 和 Y=68: 定义了线条在屏幕上的位置
;W=60 和 H=3: 这些参数定义了线条的宽度和高度
[MeterLine]
Meter=Image
X=20
Y=68
W=60
H=3
SolidColor=12,201,255

[MeterLine2]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=218,165,32

[MeterLine3]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=65,105,225

[MeterPython]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=218, 112, 214

[MeterLine5]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=0,100,0

[MeterLine6]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=178, 34, 34

[MeterLine7]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=50,205,50

[MeterLine8]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=48, 25, 52

[MeterLine9]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=255, 127, 80

[MeterLine10]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=34, 139, 34

;joplin
[MeterLine11]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=255,255,0

[MeterClashLine]
Meter=Image
X=60r
Y=r
W=60
H=3
SolidColor=240, 128, 128
;-------------------------------------------------------------
;-------------------------------------------------------------
;这里设置图标效果
;变量都保存在Variables.inc 中、开头使用 @include=#@#Variables.inc 调用了
;ImageName=#LinkIcon1NameAndPath# 显示的图片、图片路径存在变量LinkIcon1NameAndPath 中
;LeftMouseUpAction="#LinkLocationPath1#" 定义了当用户在图像上执行左键点击时所执行的动作
;MouseOverAction  鼠标放在图片上的效果
;MouseLeaveAction 鼠标离开图片的效果
;Meter=Image: 这个参数告诉Rainmeter这个元素是一个图像。
;X=40 和 Y=30: 定义了图像在屏幕上的位置。X是水平位置，Y是垂直位置
;W=25: 定义了图像的宽度。
;AntiAlias=1: 这个参数启用了图像的抗锯齿功能，使图像边缘更加平滑
;PreserveAspectRatio=1: 这个参数设置为1时，保持图像的长宽比，以确保图像在改变大小时不会失真
;Group=Icons: 这个参数将该图像元素分组到一个名为 "Icons" 的组中，这有助于管理和布局Rainmeter皮肤中的元素。

;打开我的电脑
[MeterIcon1]
Meter=Image
ImageName=#LinkIcon1NameAndPath#
X=40
Y=30
W=30
LeftMouseUpAction="#LinkLocationPath1#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon1 ImageAlpha 150][!UpdateMeter MeterIcon1][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon1 ImageAlpha 255][!UpdateMeter MeterIcon1][!Redraw]

;图标凸起效果
MouseOverAction=[!SetOption MeterIcon1 ImageName "#HoverIcon1NameAndPath#"][!SetOption MeterIcon1 Y "15"][!SetOption MeterIcon1 W "50"][!UpdateMeter MeterIcon1][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon1 ImageName "#LinkIcon1NameAndPath#"][!SetOption MeterIcon1 Y "30"][!SetOption MeterIcon1 W "30"][!UpdateMeter MeterIcon1][!Redraw]

;google
[MeterIcon2]
Meter=Image
ImageName=#LinkIcon2NameAndPath#
X=100
Y=30
W=30
LeftMouseUpAction="#LinkLocationPath2#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon2 ImageAlpha 150][!UpdateMeter MeterIcon2][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon2 ImageAlpha 255][!UpdateMeter MeterIcon2][!Redraw]

MouseOverAction=[!SetOption MeterIcon2 ImageName "#HoverIcon2NameAndPath#"][!SetOption MeterIcon2 Y "15"][!SetOption MeterIcon2 W "50"][!UpdateMeter MeterIcon2][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon2 ImageName "#LinkIcon2NameAndPath#"][!SetOption MeterIcon2 Y "30"][!SetOption MeterIcon2 W "30"][!UpdateMeter MeterIcon2][!Redraw]

[MeterIcon3]
Meter=Image
ImageName=#LinkIcon3NameAndPath#
X=156
Y=27
W=38
LeftMouseUpAction="#LinkLocationPath3#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon3 ImageAlpha 150][!UpdateMeter MeterIcon3][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon3 ImageAlpha 255][!UpdateMeter MeterIcon3][!Redraw]

MouseOverAction=[!SetOption MeterIcon3 ImageName "#HoverIcon3NameAndPath#"][!SetOption MeterIcon3 Y "15"][!SetOption MeterIcon3 W "50"][!UpdateMeter MeterIcon3][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon3 ImageName "#LinkIcon3NameAndPath#"][!SetOption MeterIcon3 Y "27"][!SetOption MeterIcon3 W "38"][!UpdateMeter MeterIcon3][!Redraw]

[MeterPychrm]
Meter=Image
ImageName=#PythonImgPath1#
X=215
Y=25
W=36
LeftMouseUpAction="#PythonAppPath#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
MouseOverAction=[!SetOption MeterPychrm ImageName "#PythonImgPath2#"][!SetOption MeterPychrm Y "15"][!SetOption MeterPychrm W "50"][!UpdateMeter MeterPychrm][!Redraw]
MouseLeaveAction=[!SetOption MeterPychrm ImageName "#PythonImgPath1#"][!SetOption MeterPychrm Y "25"][!SetOption MeterPychrm W "38"][!UpdateMeter MeterPychrm][!Redraw]

[MeterIcon5]
Meter=Image
ImageName=#LinkIcon5NameAndPath#
X=272
Y=30
W=35
LeftMouseUpAction="#LinkLocationPath5#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon5 ImageAlpha 150][!UpdateMeter MeterIcon5][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon5 ImageAlpha 255][!UpdateMeter MeterIcon5][!Redraw]

MouseOverAction=[!SetOption MeterIcon5 ImageName "#HoverIcon5NameAndPath#"][!SetOption MeterIcon5 Y "15"][!SetOption MeterIcon5 W "50"][!UpdateMeter MeterIcon5][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon5 ImageName "#LinkIcon5NameAndPath#"][!SetOption MeterIcon5 Y "30"][!SetOption MeterIcon5 W "35"][!UpdateMeter MeterIcon5][!Redraw]

[MeterIcon6]
Meter=Image
ImageName=#LinkIcon6NameAndPath#
X=340
Y=30
W=25
LeftMouseUpAction="#LinkLocationPath6#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon6 ImageAlpha 150][!UpdateMeter MeterIcon6][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon6 ImageAlpha 255][!UpdateMeter MeterIcon6][!Redraw]

MouseOverAction=[!SetOption MeterIcon6 ImageName "#HoverIcon6NameAndPath#"][!SetOption MeterIcon6 Y "15"][!SetOption MeterIcon6 W "50"][!UpdateMeter MeterIcon6][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon6 ImageName "#LinkIcon6NameAndPath#"][!SetOption MeterIcon6 Y "30"][!SetOption MeterIcon6 W "30"][!UpdateMeter MeterIcon6][!Redraw]

[MeterIcon7]
Meter=Image
ImageName=#LinkIcon7NameAndPath#
X=400
Y=30
W=25
LeftMouseUpAction="#LinkLocationPath7#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon7 ImageAlpha 150][!UpdateMeter MeterIcon7][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon7 ImageAlpha 255][!UpdateMeter MeterIcon7][!Redraw]

MouseOverAction=[!SetOption MeterIcon7 ImageName "#HoverIcon7NameAndPath#"][!SetOption MeterIcon7 Y "15"][!SetOption MeterIcon7 W "50"][!UpdateMeter MeterIcon7][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon7 ImageName "#LinkIcon7NameAndPath#"][!SetOption MeterIcon7 Y "30"][!SetOption MeterIcon7 W "30"][!UpdateMeter MeterIcon7][!Redraw]

[MeterIcon8]
Meter=Image
ImageName=#LinkIcon8NameAndPath#
X=460
Y=30
W=25
LeftMouseUpAction="#LinkLocationPath8#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon8 ImageAlpha 150][!UpdateMeter MeterIcon8][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon8 ImageAlpha 255][!UpdateMeter MeterIcon8][!Redraw]

MouseOverAction=[!SetOption MeterIcon8 ImageName "#HoverIcon8NameAndPath#"][!SetOption MeterIcon8 Y "15"][!SetOption MeterIcon8 W "50"][!UpdateMeter MeterIcon8][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon8 ImageName "#LinkIcon8NameAndPath#"][!SetOption MeterIcon8 Y "30"][!SetOption MeterIcon8 W "30"][!UpdateMeter MeterIcon8][!Redraw]

[MeterIcon9]
Meter=Image
ImageName=#LinkIcon9NameAndPath#
X=520
Y=30
W=25
LeftMouseUpAction="#LinkLocationPath9#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons
;MouseOverAction=[!SetOption MeterIcon9 ImageAlpha 150][!UpdateMeter MeterIcon9][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon9 ImageAlpha 255][!UpdateMeter MeterIcon9][!Redraw]

MouseOverAction=[!SetOption MeterIcon9 ImageName "#HoverIcon9NameAndPath#"][!SetOption MeterIcon9 Y "15"][!SetOption MeterIcon9 W "50"][!UpdateMeter MeterIcon9][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon9 ImageName "#LinkIcon9NameAndPath#"][!SetOption MeterIcon9 Y "30"][!SetOption MeterIcon9 W "30"][!UpdateMeter MeterIcon9][!Redraw]

[MeterIcon10]
Meter=Image
ImageName=#LinkIcon10NameAndPath#
X=580
Y=30
W=30
LeftMouseUpAction="#LinkLocationPath10#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons

;透明
;MouseOverAction=[!SetOption MeterIcon10 ImageAlpha 150][!UpdateMeter MeterIcon10][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon10 ImageAlpha 255][!UpdateMeter MeterIcon10][!Redraw]

MouseOverAction=[!SetOption MeterIcon10 ImageName "#HoverIcon10NameAndPath#"][!SetOption MeterIcon10 Y "15"][!SetOption MeterIcon10 W "50"][!UpdateMeter MeterIcon10][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon10 ImageName "#LinkIcon10NameAndPath#"][!SetOption MeterIcon10 Y "30"][!SetOption MeterIcon10 W "30"][!UpdateMeter MeterIcon10][!Redraw]

;joplin
[MeterIcon11]
Meter=Image
ImageName=#LinkIcon11NameAndPath#
X=640
Y=30
W=30
LeftMouseUpAction="#LinkLocationPath11#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons

;透明
;MouseOverAction=[!SetOption MeterIcon10 ImageAlpha 150][!UpdateMeter MeterIcon10][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon10 ImageAlpha 255][!UpdateMeter MeterIcon10][!Redraw]

;图标变大变小的效果
MouseOverAction=[!SetOption MeterIcon11 ImageName "#HoverIcon11NameAndPath#"][!SetOption MeterIcon11 Y "15"][!SetOption MeterIcon11 W "50"][!UpdateMeter MeterIcon11][!Redraw]
MouseLeaveAction=[!SetOption MeterIcon11 ImageName "#LinkIcon11NameAndPath#"][!SetOption MeterIcon11 Y "30"][!SetOption MeterIcon11 W "30"][!UpdateMeter MeterIcon11][!Redraw]

;clash
[MeterClash]
Meter=Image
ImageName=#ClashImgPath1#
X=700
Y=30
W=30
;LeftMouseUpAction 鼠标左键点击的动作-运行exe
LeftMouseUpAction="#ClashAppPath#"
AntiAlias=1
PreserveAspectRatio=1
Group=Icons

;透明
;MouseOverAction=[!SetOption MeterIcon10 ImageAlpha 150][!UpdateMeter MeterIcon10][!Redraw]
;MouseLeaveAction=[!SetOption MeterIcon10 ImageAlpha 255][!UpdateMeter MeterIcon10][!Redraw]

MouseOverAction=[!SetOption MeterClash ImageName "#ClashImgPath2#"][!SetOption MeterClash Y "15"][!SetOption MeterClash W "50"][!UpdateMeter MeterClash][!Redraw]
MouseLeaveAction=[!SetOption MeterClash ImageName "#ClashImgPath1#"][!SetOption MeterClash Y "30"][!SetOption MeterClash W "30"][!UpdateMeter MeterClash][!Redraw]
;-------------------------------------------------------------
;-------------------------------------------------------------
```

**根据上面的代码，更改自己需要的链接和图标路径即可， ；号为注释**
## Web SRC 

:::tip

**最后更新时间：2018年10月07日**

**字数：19918**  

:::

**努力学习，提高自己**

## 学习资源

* [i春秋](https://www.ichunqiu.com/)
* [i春秋Web安全工程师课程](https://www.ichunqiu.com/train/course/11?i=2)

### SRC

* Security Emergency Response Center
* 安全应急响应中心
* 主要针对科技互联网企业常见的安全漏洞而特别设立的机构
* 国内各大SRC
  * [i春秋SRC部落](https://www.ichunqiu.com/src)
  * [阿里安全响应中心](https://security.alibaba.com/)
  * [百度安全应急响应中心](http://sec.baidu.com/views/main/index.html#home)
  * [腾讯安全应急响应中心](https://security.tencent.com/)
  * 等等

## 黑客

### 黑客

* **黑客**（ 大陆和香港：黑客；台湾：骇客，英文：Hacker）通常是指对计算机科学、编程和设计方面具高度理解的人。
* “黑客”一词最早用来称呼研究盗用电话系统的人士。

* 在信息安全里，“黑客”指研究智取计算机安全系统的人员。

### 黑帽黑客

* 利用公共通讯网路，如互联网和电话系统，在未经许可的情况下，载入对方系统的被称为**黑帽黑客**（英文：black hat，另称cracker）
* 简单来说搞破坏的，目的不纯，非法的

### 白帽黑客

* 是指那些专门研究或者从事网络、计算机技术防御的人，他们通常受雇于各大公司，是维护世界网络、计算机安全的主要力量。很多白帽还受雇于公司，对产品进行模拟黑客攻击，以检测产品的可靠性。

### 黑帽

* 亦称黑帽黑客、黑帽子黑客，他们专门研究病毒木马、研究操作系统，寻找漏洞，并且以个人意志为出发点，攻击网络或者计算机。

### 骇客

* 骇客是黑客的一种，但他们的行为已经超过了正常黑客行为的界限，因为为了各种目的——个人喜好、金钱等等对目标群进行毫无理由的攻击，这些人基本上为了金钱什么事都可以做。
* 虽然同属黑客范畴，但是他们的所作所为已经严重的危害到了网络和计算机安全，他们的每一次攻击都会造成大范围的影响以及经济损失，因此，他们获得了一个专属的称号:骇客。

* 但是现在有时候界限已经很模糊了，因为和黑客本质都是进攻和破坏计算机系统

## 虚拟机

### 虚拟机定义

* 虚拟机是通过软件模拟的，具有完整硬件系统功能的，运行在实体机上的一个计算机软件。
* 通过虚拟化软件，我们可以在一台真是的电脑上同时开启并运行多个虚拟机

### 常见软件

* VMware Workstation
* Parallels Desktop
* Virtual PC
* VirtualBox （开源免费）

### VMware

* VMware三种网络模式
  * Bridged：桥接模式
  * NAT：网络地址转换模式
  * Host-Only：仅主机模式

#### 桥接模式

* 将主机网卡与虚拟机虚拟的网卡利用虚拟网桥进行通信。
* 在桥接的作用下，类似于把物理主机虚拟为一个交换机，所有桥接设置的虚拟机连接到这个交换机的一个接口上，物理主机也同样插在这个交换机当中，所以所有桥接下的网卡与网卡都是交换模式的，相互可以访问而不干扰。
* 在桥接模式下，虚拟机ip地址需要与主机在同一个网段，如果需要联网，则网关与DNS需要与主机网卡一致。

:::tip

**虚拟机和实体机在同一个网段**

:::

#### 网络地址转换模式

* 如果你的网络ip资源紧缺，但是你又希望你的虚拟机能够联网，这时候NAT模式是最好的选择。
* NAT模式借助虚拟NAT设备和虚拟DHCP服务器，使得虚拟机可以联网。
* 在NAT模式中，主机网卡直接与虚拟NAT设备相连，然后虚拟NAT设备与虚拟DHCP服务器一起连接在虚拟交换机VMnet上，这样就实现了虚拟机联网。
* VMnet虚拟网卡主要是为了实现主机与虚拟机之间的通信

:::tip

**虚拟机通过实体机来上网**

:::

#### 近主机模式

* Host-Only模式其实就是NAT模式去除了虚拟NAT设备，然后使用虚拟网卡连接虚拟交换机来与虚拟机通信的
* Host-Only模式将虚拟机与外网隔开，使得虚拟机成为一个独立的系统，只与主机相互通讯。

:::tip

**虚拟机只能跟实体机通讯，无法连接到互联网**

:::

### 虚拟机快照

* 磁盘“快照”是虚拟机磁盘文件（VMDK）在某个点及时的复本。系统崩溃或系统异常，你可以通过使用恢复到快照来保持磁盘文件系统和系统存储。当升级应用和服务器及给它们打补丁的时候，快照是救世主。

## HTTP代理

* 代理服务器是介于浏览器和Web服务器之间的一台服务器，有了它之后，浏览器不是直接到Web服务器去取回网页而是向代理服务器发出请求
* Request信号会先送到代理服务器，由代理服务器来取回浏览器所需要的信息并传送给你的浏览器

### web安全中的代理

* 通过HTTP代理，我们可以查看、分析浏览器和web服务器之间的HTTP通讯数据
* 通过查看HTTP流量，我们可以方便的测试各种web漏洞，比如SQL注入，文件上传，弱口令等

## 渗透测试环境

### DVWA

* [DVWA（Damn Vulnerable Web Application）](http://www.dvwa.co.uk/)是一个用来进行安全脆弱性鉴定的 PHP/MySQL Web应用，旨在为安全专业人员测试自己的专业技能和工具提供合法的环境，帮助web开发者更好的理解web应用安全防范的过程。

* DVWA是randomstorm的一个开源项目。如果你更多的了解randomstorm的服务和产品你可以访问他们官方网站www.randomstorm.com

### DVWA模块

* Brute Force（暴力（破解））
* Command Injection（命令行注入）
* CSRF（跨站请求伪造）
* File Inclusion（文件包含）
* File Upload（文件上传）
* Insecure CAPTCHA （不安全的验证码）
* SQL Injection（SQL注入）
* SQL Injection（Blind）（SQL盲注）
* XSS（Reflected）（反射型跨站脚本）
* XSS（Stored）（存储型跨站脚本）

### 安装DVWA

* Web运行环境：
  * 推荐phpstudy
* 官网：
  * http://www.dvwa.co.uk/
* 配置文件
  * DVWA ——  config ——  config.inc.php
  * 修改数据库用户名和密码root
* 安装地址：
  * http://127.0.0.1/DVWA/setup.php

* Create / Reset Database
* DVWA默认用户名和密码
  * admin
  * password

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/10/04/ce19ca12401358d180a9d1fd0f428bf2.png" />

* 原文英文，这是谷歌翻译后的结果

## Brup Suite

* Burp Suite 是用于攻击web 应用程序的集成平台，包含了许多工具。
* Burp Suite为这些工具设计了许多接口，以加快攻击应用程序的过程。
* 所有工具都共享一个请求，并能处理对应的HTTP 消息、持久性、认证、代理、日志、警报。

### 几大功能模块

* Proxy——是一个拦截HTTP/S的代理服务器，作为一个在浏览器和目标应用程序之间的中间人，允许你拦截，查看，修改在两个方向上的原始数据流。
* Spider——是一个应用智能感应的网络爬虫，它能完整的枚举应用程序的内容和功能。
* Scanner[仅限专业版]——是一个高级的工具，执行后，它能自动地发现web 应用程序的安全漏洞。
* Intruder——是一个定制的高度可配置的工具，对web应用程序进行自动化攻击，如：枚举标识符，收集有用的数据，以及使用fuzzing 技术探测常规漏洞。
* Repeater——是一个靠手动操作来补发单独的HTTP 请求，并分析应用程序响应的工具。
* Sequencer——是一个用来分析那些不可预知的应用程序会话令牌和重要数据项的随机性的工具。
* Decoder——是一个进行手动执行或对应用程序数据者智能解码编码的工具。
* Comparer——是一个实用的工具，通常是通过一些相关的请求和响应得到两项数据的一个可视化的“差异”。

:::tip

**推荐入门使用brupsuite + 火狐浏览器，而不是chrome浏览器，楼主用的是mac，chrome配置起来非常麻烦，建议火狐浏览器**

:::

## OWASP

* 开放式Web应用程序安全项目（OWASP，Open Web Application Security Project）是一个组织，它提供有关计算机和互联网应用程序的公正、实际、有成本效益的信息。
* 其目的是协助个人、企业和机构来发现和使用可信赖软件。
* 开放式Web应用程序安全项目（OWASP）是一个非营利组织，不附属于任何企业或财团。
* 因此，由OWASP提供和开发的所有设施和文件都不受商业因素的影响。
* OWASP支持商业安全技术的合理使用，它有一个论坛，在论坛里信息技术专业人员可以发表和传授专业知识和技能。

:::tip

**OWASP每隔四年发布一次十大最严重的web安全威胁，简称OWASP TOP 10**

:::

### OWASP 中国

* [OWASP中国](http://www.owasp.org.cn/)

### OWASP Top 10 2017

* [在线预览网址](http://www.owasp.org.cn/owasp-project/OWASPTop102017v1.3.pdf)

### 2013 VS 2017

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/10/05/58c117ee40f4a674802edeb7eb006b91.png" />

## 注入类威胁

* 将不受信任的数据作为命令或查询的一部分发送到解析器时，会产生诸如SQL注入、NoSQL注入、OS
  注入和LDAP注入的注入缺陷。
* 攻击者的恶意数据可以诱使解析器在没有适当授权的情况下执行非预期命令或访问数据。
* 通俗点就是：web应用程序没有将程序代码和用户提交的数据区别开来，将恶意用户提交的数据，当做了一部分代码解析执行。

### 常见注入类威胁分类

* SQL注入
* XSS漏洞
* 文件上传
* 文件包含
* 文件下载
* OS命令注入

### SQL注入

* 所谓SQL注入，就是通过把SQL命令插入到Web表单提交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。
* 它是利用现有应用程序，将（恶意的）SQL命令注入到后台数据库引擎执行的能力，它可以通过在Web表单中输入（恶意）SQL语句得到一个存在安全漏洞的网站上的数据库，而不是按照设计者意图去执行SQL语句。

#### 原理

* SQL注入攻击指的是通过构建特殊的输入作为参数传入Web应用程序，而这些输入大都是SQL语法里的一些组合，通过执行SQL语句进而执行攻击者所要的操作，其主要原因是程序没有细致地过滤用户输入的数据，致使非法数据侵入系统。

* 当应用程序使用输入内容来构造动态sql语句以访问数据库时，会发生sql注入攻击。

#### 防护

* 永远不要信任用户的输入。对用户的输入进行校验，可以通过正则表达式，或限制长度；对单引号和双"-"进行转换等。

* 永远不要使用动态拼装sql，可以使用参数化的sql或者直接使用存储过程进行数据查询存取。

* 永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。

* 不要把机密信息直接存放，加密或者hash掉密码和敏感的信息。

* 应用的异常信息应该给出尽可能少的提示，最好使用自定义的错误信息对原始错误信息进行包装

* sql注入的检测方法一般采取辅助软件或网站平台来检测，软件一般采用sql注入检测工具jsky，网站平台就有亿思网站安全平台检测工具。MDCSOFT SCAN等。采用MDCSOFT-IPS可以有效的防御SQL注入，XSS攻击等。

### XSS漏洞

* XSS攻击全称跨站脚本攻击，是为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS
* XSS是一种在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中。
* 攻击者利用XSS漏洞旁路掉访问控制——例如同源策略(same origin policy)。
  * 这种类型的漏洞由于被黑客用来编写危害性更大的网络钓鱼(Phishing)攻击而变得广为人知。
  * 对于跨站脚本攻击，黑客界共识是：跨站脚本攻击是新型的“缓冲区溢出攻击“，而JavaScript是新型的“ShellCode”。

#### XSS危害

* 盗取各类用户帐号，如机器登录帐号、用户网银帐号、各类管理员帐号
* 控制企业数据，包括读取、篡改、添加、删除企业敏感数据的能力
* 盗窃企业重要的具有商业价值的资料
* 非法转账
* 强制发送电子邮件
* 网站挂马
* 控制受害者机器向其它网站发起攻击

#### XSS漏洞分类

* XSS漏洞按照攻击利用手法的不同，有以下三种类型
  * 本地利用漏洞
  * 反射式漏洞
  * 存储式漏洞

#### XSS防御

* 基于特征的防御
  * 检测用户提交的信息，在所有提交的信息中都进行匹配检查
* 基于代码修改的防御
  * 对所有用户提交内容进行可靠的输入验证，包括对URL、查询关键字、HTTP头、POST数据等，仅接受指定长度范围内、采用适当格式、采用所预期的字符的内容提交，对其他的一律过滤。
  * 实现Session标记(session tokens)、CAPTCHA系统或者HTTP引用头检查，以防功能被第三方网站所执行。
  * 确认接收的的内容被妥善的规范化，仅包含最小的、安全的Tag(没有javascript)，去掉任何对远程内容的引用(尤其是样式表和javascript)，使用HTTP only的cookie。

### 文件上传漏洞

* 文件上传漏洞是指网络攻击者上传了一个可执行的文件到服务器并执行。
* 这里上传的文件可以是木马，病毒，恶意脚本或者WebShell等。

#### 现状

* 这种攻击方式是最为直接和有效的，部分文件上传漏洞的利用技术门槛非常的低，对于攻击者来说很容易实施。
* 即便很容易被攻击者利用漏洞，但是在今天的现代互联网的Web应用程序，它是一种常见的要求，因为它有助于提高业务效率。
* 企业支持门户，给用户各企业员工有效地共享文件。允许用户上传图片，视频，头像和许多其他类型的文件
* 向用户提供的功能越多，Web应用受到攻击的风险和机会就越大，这种功能会被恶意用户利用，获得到一个特定网站的权限，或危及服务器的可能性是非常高的。

#### 成因

* 由于程序员在对用户文件上传部分的控制不足或者处理缺陷，而导致用户可以越过其本身权限向服务器上传可执行的动态脚本文件。

#### 常见漏洞

* 前端验证
  * 前端修改验证代码，即可绕过前端验证文件类型，图片文件限制
* MIME验证
  * 对于上传的文件，上传时都会指明上传文件的类型，即MIME信息。如果服务器验证的是MIME，可以通过修改MIME信息进行绕过上传。
* 文件扩展名漏洞
  * 这类漏洞是由于后台判断的扩展名不全才发生的。 
  * 例如：服务器会将以`php php2 php3 php4 php5`为后缀名的文件全部按照`php`文件解析，其中的代码会被执行。但是某些后端判定并没有完全覆盖这些扩展名，因此上传这样扩展名的文件不会被排斥，这样我们就能成功上传一个非法但是有效的文件。
* 文件内容检测
  * 简单来说就是在非法的文件中加入合法文件的成分，进而通过检查。
  * 例如：规定上传文件必须是`jpg`文件，在上传时检查是否具有`jpg`文件的结构。我们知道，`jpg`文件有特定的文件头和文件结尾，在文件结尾之后的数据不再作为图片数据进行解析。
  * 因此，我们可以在一个正常的`jpg`图片后添加一段`php`代码，这样在上传判定时可以通过内容检测，在作为代码解析时也拥有正确的代码段。从而我们上传了一个非法文件。
* 空字节截断目录路径检测绕过
  * 这是一种针对服务器对上传文件名解析时，使用空格作为截断符的机制设计的绕过。 
  * 例如：我们上传的本地文件的文件名中可能包含空格，如`picture.php .jpg`，这时计算机把文件当成`jpg`文件进行解析。
  * 当上传到服务器时，我们截获发出的包，把中间的空格（ASCII 20）改为终止符（ASCII 00），在判定时依然是`jpg`文件，但是到达服务器端后会因为终止符的出现而结束文件名的获取，这样我们就获得了一个目标扩展名的文件，如`picture.php`。

#### 解决方案

* 上传的文件能够被Web容器解释执行。所以文件上传后所在的目录要是Web容器所覆盖到的路径。
* 用户能够从Web上访问这个文件。如果文件上传了，但用户无法通过Web访问，或者无法得到Web容器解释这个脚本，那么也不能称之为漏洞。
* 用户上传的文件若被安全检查、格式化、图片压缩等功能改变了内容，则也可能导致攻击不成功。

##### 文件上传的目录设置为不可执行

* 只要web容器无法解析该目录下面的文件，即使攻击者上传了脚本文件，服务器本身也不会受到影响，因此这一点至关重要。

##### 判断文件类型

* 在判断文件类型时，可以结合使用MIME Type、后缀检查等方式。
* 在文件类型检查中，强烈推荐白名单方式，黑名单的方式已经无数次被证明是不可靠的。
* 此外，对于图片的处理，可以使用压缩函数或者resize函数，在处理图片的同时破坏图片中可能包含的HTML代码。

##### 使用随机数改写文件名和文件路径

* 文件上传如果要执行代码，则需要用户能够访问到这个文件。
* 在某些环境中，用户能上传，但不能访问。
* 如果应用了随机数改写了文件名和路径，将极大地增加攻击的成本。
* 再来就是像shell.php.rar.rar和crossdomain.xml这种文件，都将因为重命名而无法攻击。

##### 单独设置文件服务器的域名

* 由于浏览器同源策略的关系，一系列客户端攻击将失效，比如上传crossdomain.xml、上传包含Java的XSS利用等问题将得到解决。

### 文件上传漏洞绕过姿势（转载）

[**原文链接：nMask 文件上传漏洞（绕过姿势）**](https://thief.one/2016/09/22/%E4%B8%8A%E4%BC%A0%E6%9C%A8%E9%A9%AC%E5%A7%BF%E5%8A%BF%E6%B1%87%E6%80%BB-%E6%AC%A2%E8%BF%8E%E8%A1%A5%E5%85%85/)

* 客户端绕过（抓包改包）
* 服务端绕过
  - 文件类型
  - 文件头
  - 文件后缀名
* 配合文件包含漏洞绕过
* 配合服务器解析漏洞绕过
* CMS、编辑器漏洞绕过
* 配合操作系统文件命名规则绕过
* 配合其他规则绕过
* WAF绕过

### 客户端绕过

* 可以利用burp抓包改包，先上传一个gif类型的木马，然后通过burp将其改为asp/php/jsp后缀名即可。

### 服务端绕过

* 文件类型绕过

* 文件头绕过

* 文件后缀名绕过

#### 文件类型绕过

* 我们可以通过抓包，将content-type字段改为image/gif

```http
POST /upload.php HTTP/1.1
TE: deflate,gzip;q=0.3
Connection: TE, close
Host: localhost
User-Agent: libwww-perl/5.803
Content-Type: multipart/form-data; boundary=xYzZY
Content-Length: 155
--xYzZY
Content-Disposition: form-data; name="userfile"; filename="shell.php"
Content-Type: image/gif (原为Content-Type: text/plain)
<?php system($_GET['command']);?>
--xYzZY-
```

####  文件头绕过

* 在木马内容基础上再加了一些文件信息，有点像下面的结构
  `GIF89a<?php phpinfo(); ?>`

#### 文件后缀名绕过

* 前提：黑名单校验
* 黑名单检测：一般有个专门的 blacklist 文件，里面会包含常见的危险脚本文件。
* 绕过方法：
  * 找黑名单扩展名的漏网之鱼 - 比如 asa 和 cer 之类
  * 可能存在大小写绕过漏洞 - 比如 aSp 和 pHp 之类
* 能被解析的文件扩展名列表：
  * jsp 
  * jspx
  * jspf
  * asp
  * asa
  * cer
  * aspx
  * php
  * php
  * php3
  * php4
  * exe
  * exee

#### 配合文件包含漏洞

* 前提：校验规则只校验当文件后缀名为asp/php/jsp的文件内容是否为木马。
* 绕过方式：（这里拿php为例，此漏洞主要存在于PHP中）
  * 先上传一个内容为木马的txt后缀文件，因为后缀名的关系没有检验内容；
  * 然后再上传一个.php的文件，内容为`<?php Include(“上传的txt文件路径”);?>`
  * 此时，这个php文件就会去引用txt文件的内容，从而绕过校验，下面列举包含的语法：

```shell
#PHP    
<?php Include("上传的txt文件路径");?> 
#ASP    
<!--#include file="上传的txt文件路径" -->
#JSP    
<jsp:inclde page="上传的txt文件路径"/>
or  
<%@include file="上传的txt文件路径"%>

```

* 详细参考：[文件包含漏洞(绕过姿势)](http://thief.one/2017/04/10/2/)

* 大致内容：

  * 特殊姿势phar://协议

  * php文件包含漏洞

    * 本地包含漏洞（LFI）

    * 远程包含漏洞

    * 文件包含利用

      * 读取敏感信息

      * 远程包含shell

      * 本地包含配合文件上传

      * 本地包含配合apache日志拿shell
      * 利用/proc/self/environ进行包含
      * 利用php协议进行包含
      * 截断包含
     * 文件包含漏洞修复

   * jsp文件包含漏洞

      * include

      * jsp:include

      * 采用JSTL

   * asp文件包含漏洞

   * aspx文件包含漏洞 

#### 配合服务器解析漏洞

* 详细可参考：[http://thief.one/2016/09/21/服务器解析漏洞/](http://thief.one/2016/09/21/%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%A7%A3%E6%9E%90%E6%BC%8F%E6%B4%9E/)

#### 配合操作系统文件命令规则

* 上传不符合windows文件命名规则的文件名，会被windows系统自动去掉不符合规则符号后面的内容
  * test.asp.
  * test.asp(空格)
  * test.php:1.jpg
  * test.php::$DATA
  * shell.php::$DATA…….
* linux下后缀名大小写，在linux下，如果上传php不被解析，可以试试上传pHp后缀的文件名。

#### CMS、编辑器漏洞

* CMS漏洞：比如说JCMS等存在的漏洞，可以针对不同CMS存在的上传漏洞进行绕过。
* 编辑器漏洞：比如FCK，ewebeditor等，可以针对编辑器的漏洞进行绕过。

#### 配合其他规则

* 0x00截断：基于一个组合逻辑漏洞造成的，通常存在于构造上传文件路径的时候`test.php(0x00).jpg` `test.php%00.jpg`路径`/upload/1.php(0x00)`，文件名1.jpg，结合`/upload/1.php(0x00)/1.jpg`
* 伪代码演示：

```php
name= getname(httprequest) //假如这时候获取到的文件名是 help.asp.jpg(asp 后面为 0x00)
type =gettype(name)        //而在 gettype()函数里处理方式是从后往前扫描扩展名，所以判断为 jpg
if(type == jpg)
   SaveFileToPath(UploadPath.name, name)   //但在这里却是以 0x00 作为文件名截断
//最后以 help.asp 存入路径里
```

#### WAF绕过

* 垃圾数据
  * 有些主机WAF软件为了不影响web服务器的性能，会对校验的用户数据设置大小上限，比如1M。
  * 此种情况可以构造一个大文件，前面1M的内容为垃圾内容，后面才是真正的木马内容，便可以绕过WAF对文件内容的校验；
* filename
  * 针对早期版本安全狗，可以多加一个filename
  * 或者将filename换位置，在IIS6.0下如果我们换一种书写方式，把filename放在其他地方
* POST/GET
  * 有些WAF的规则是：如果数据包为POST类型，则校验数据包内容。
  * 此种情况可以上传一个POST型的数据包，抓包将POST改为GET。

#### 文件校验的几点建议

- 文件扩展名服务端白名单校验。
- 文件内容服务端校验。
- 上传文件重命名。
- 隐藏上传文件路径。

### 文件包含漏洞（PHP为例）

#### 文件包含

* 文件包含就是一个文件里面包含另外一个文件。
* 程序开发人员一般会把重复使用的函数写到单个文件中，需要使用某个函数时直接调用此文件，而无需再次编写，这中文件调用的过程一般被称为文件包含。
* 程序开发人员一般希望代码更灵活，所以将被包含的文件设置为变量，用来进行动态调用，但正是由于这种灵活性，从而导致客户端可以调用一个恶意文件，造成文件包含漏洞。
* 几乎所有脚本语言都会提供文件包含的功能，但文件包含漏洞在PHP Web Application中居多,而在JSP、ASP、程序中却非常少，甚至没有，这是有些语言设计的弊端。
* **在PHP中经常出现包含漏洞，但这并不意味这其他语言不存在。**

#### 成因

* 指当服务器开启allow_url_include选项时，就可以通过php的某些特性函数include()，require()和include_once()，require_once()利用url去动态包含文件
* 此时如果没有对文件来源进行严格审查，就会导致任意文件读取或者任意命令执行。
* 通过引入文件时，用户可控，没有严格的检验，或是被绕过，操作一些敏感文件，导致文件泄露和恶意代码注入

#### 分类

* 本地文件包含 当被包含的文件在服务器本地时，就形成本地文件包含
* 远程文件包含 当被包含的文件在第三方服务器时，叫做远程文件包含

#### 常见PHP文件包含函数

* **include()**
  * 当使用该函数包含文件时，只有代码执行到include()函数时才将文件包含进来，发生错误时只给出一个警告，继续向下执行
* **include_once()**
  * 功能和include()相同，区别在于当重复调用同一文件时，程序只调用一次

* **require()**

* require()与include()的区别在于require()执行如果发生错误，函数会输出错误信息，并终止脚本的运行 。
* 使用require()函数包含文件时，只要程序一执行，立即调用文件，而include()只有程序执行到函数时才调用 .require()在php程序执行前执行，会先读入 require 所指定引入的文件，使它变成 PHP 程序网页的一部份。

* **require_once()**
  * 它的功能与require()相同，区别在于当重复调用同一文件时，程序只调用一次

:::tip

* 攻击者利用了包含的特性，再加上了应用本身对文件控制不严，对include进来的文件不可控，最终造成了攻击者进行任意文件包含。
* 包含进来的文件都以当前脚本文件解析，比如，我们当前测试系统是Apache加php环境，那么被include进来的文件，不管是什么类型，比如说图片，文本文档，这些文件被包含以后，都会被当做php脚本来解析

:::

### 任意文件下载漏洞

### OS命令注入

## 信息泄露类威胁

### 常见信息泄露类威胁分类

* 目录信息泄露
* 敏感文件泄露
* 弱口令泄露
* 未授权访问泄露
* 敏感路径泄露
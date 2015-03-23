<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<title>Account Actived</title>
<style type="text/css">
.title {
	font-family: arial, verdana;
	font-size: 9pt;
	font-weight: normal;
}
.distributers {
	font-family: arial, verdana;
	font-size: 11pt;
	font-weight: normal;
}
.info {
	font-family: arial, verdana;
	font-size: 8pt;
	font-weight: normal;
}
.design {
	font-family: arial, verdana;
	font-size: 8pt;
	font-weight: normal;
}
.menu {
	border-top: 1px #374646 solid;
	border-left: 1px #374646 solid;
	border-right: 1px #374646 solid;
	border-bottom: 1px #374646 solid;
	font-family: verdana, arial;
	font-size: 8pt;
	font-weight: normal;
}
.cellheader {
	border-top: 1px #374646 solid;
	border-left: 1px #374646 solid;
	border-right: 1px #374646 solid;
	border-bottom: 1px #374646 solid;
	font-family: verdana, arial;
	font-size: 20pt;
	font-weight: normal;
	color: #F1F1F1;
}
.scellheader {
	border-top: 1px #374646 solid;
	border-left: 1px #374646 solid;
	border-right: 1px #374646 solid;
	border-bottom: 1px #374646 solid;
	font-family: verdana, arial;
	font-size: 15pt;
	font-weight: normal;
	color: #F1F1F1;
}
.bigcellheader {
	border-top: 1px #374646 solid;
	border-left: 1px #374646 solid;
	border-right: 1px #374646 solid;
	border-bottom: 1px #374646 solid;
	font-family: verdana, arial;
	font-size: 30pt;
	font-weight: normal;
	color: #F1F1F1;
	link: #F1F1F1;
	vlink: #F1F1F1;
}
.tblheader {
	background-color: #AAAAAA;
	border-top: 1px #374646 solid;
	border-left: 1px #374646 solid;
	border-right: 1px #374646 solid;
	border-bottom: 1px #374646 solid;
	font-family: verdana, arial;
	font-size: 14pt;
	font-weight: normal;
}
.tdshade1 {
	background-color: #DDDDDD;
	border-top: 1px #374646 solid;
	border-left: 1px #374646 solid;
	border-right: 1px #374646 solid;
	border-bottom: 1px #374646 solid;
	font-family: verdana, arial;
	font-size: 10pt;
	font-weight: normal;
}
.tdshade2 {
	background-color: #EEEEEE;
	border-top: 1px #374646 solid;
	border-left: 1px #374646 solid;
	border-right: 1px #374646 solid;
	border-bottom: 1px #374646 solid;
	font-family: verdana, arial;
	font-size: 10pt;
	font-weight: normal;
}

body {
	font-family:arial;
	margin:0;
	padding:0;
	background:url(/img-sys/bg.jpg) repeat-x #dff4fe;
	color:#6f6f6f;
	font-size:12px;
}
a {
	color:#0075a9;
}
* {
	margin:0;
	padding:0;
}
h1 {
	background:url(/img-sys/headerbg.jpg) no-repeat;
	height:63px;
	color:#fff;
	padding:20px;
	font-size:28px;
	font-family:century gothic, arial;letter-spacing:-0.5px;
}
h2 {
	font-size:20px;
	margin:0 0 15px 0;
}
p {
	margin:10px 15px 15px 50px;
}
#wrap {
	margin:50px auto 20px auto;
	width:906px;
}
.msg {
	background:url(/img-sys/contentbox.jpg) no-repeat;
	min-height:206px;
	color:#000;
	font-size:16px;
	padding:25px;
	text-align:center;
}
* html .msg {
	height:206px;
}
.msg p {
	border:none;
	margin:0 0 10px 0;
}
.msg ul {
	margin:15px 15px 0 15px;
}
li {
	margin:10px 0;
}
.note {
	font-style:italic;
	border-bottom:1px solid #cae0e5;
	border-top:1px solid #cae0e5;
	padding:15px 0;
	margin-right:50px;
}
#contactinfo, .contactinfo {
	padding:5px 0;
}
#contactinfo li, .contactinfo li {
	float:left;
	padding:5px;
	width:250px;
	list-style:none;
	font-size:14px;
}
p.troubleshoot {
	font-style:italic;
	border:dashed 1px #dfe9ed;
	padding:5px;
	margin:10px 0 0 0;
}
</style>
</head>
<body>
<h1>Account Actived</h1>
<div id="wrap">
  <div class="msg">
    <h2 align="left"><strong>Your Account is Now Active</strong></h2>
    <h2 align="left"><strong>Please upload your website to your account</strong></h2>
    <p align="left"><u>    			Control Platform Login (cPanel)</u><br />
</p>
    <p align="left"><a href="http://cpanel.<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/" target="_blank">http://cpanel.<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/</a></p>
    <p align="left"><a href="http://<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/cpanel/" target="_blank">http://<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/cpanel/</a></p>
    <p align="left">&nbsp;</p>
    <p align="left"><u>Web-Mail Access</u></p>
    <p align="left"><a href="http://webmail.<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/" target="_blank">http://webmail.<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/</a></p>
    <p align="left"><a href="http://<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/webmail/" target="_blank">http://<?php echo substr(strchr($_SERVER['SERVER_ADMIN'],"@"),1);?>/webmail/</a></p>
    <p align="left">&nbsp;</p>
    <p align="left"><u><a href="http://support.hostingspeed.net/index.php?/Knowledgebase/List/Index/5/cpanel">Email FAQ</a></u></p>
    <p align="left"><u><a href="http://support.hostingspeed.net/index.php?/Knowledgebase/Article/View/42/82/filezilla">FTP Upload FAQ</a></u></p>
    <p align="left"><u><a href="http://support.hostingspeed.net/index.php?/hosting/Knowledgebase/List">Knowledge Base</a></u></p>
    <p align="left"><u><a href="https://hostingspeed.net/account/helpdesk.php?action=add_request">Technical   			Support</a></u></p>
    <p align="left">&nbsp;</p>
    <p><a href="http://www.hostingspeed.net">www.hostingspeed.net</a></p>
    <p><img src="http://www.hostingspeed.net/images/hslogo.gif" alt="Hosting Speed"/></p>
  </div>
</div>
</body>
</html>

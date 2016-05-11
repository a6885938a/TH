document.write('<style type="text/css">');
document.write('#tcldivtf1b {position: absolute; top: '+coupletTop+'px; left:0px;visibility:hidden;z-index:999}');
document.write('#tcldivtf2b {position: absolute; top: '+coupletTop+'px;visibility:hidden;z-index:999;}');
document.write('</style>');
function closecouplet(){
	var ww;
    if (window.innerWidth){
        ww = window.innerWidth;
    }
    else if((document.body) && (document.body.clientWidth)){
        ww = document.body.clientWidth;
    }
    if (document.documentElement  && document.documentElement.clientWidth){
        ww = document.documentElement.clientWidth;
    }
	if(window.screen.width<1180){
		return true;
	}else{
		return false;
	}
}
var isclosecouplet=closecouplet();
if (window.screen.width>=1024){
	var coupletHeight = 400;
	var coupletWidth = 120;
//	var coupletTop = 146;
	var coupletNow = new Date();
    var coupletAdId = coupletLeftUrl + coupletNow.toDateString();
		document.write('<div id="tcldivtf1"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+coupletWidth+'" height="'+coupletHeight+'" style="position:fixed;top:'+ coupletTop + 'px;left:0;z-index:998;" id="coupletLeft"><param name="movie" value="'+coupletLeftUrlb+'" /><param name="quality" value="high" /><param name="wmode" value="opaque" /><embed src="'+coupletLeftUrl+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+coupletWidth+'" height="'+coupletHeight+'" swliveconnect="true" name="coupletLeft" wmode=opaque></embed></object><div id="tcldivtf1b"><embed src='+coupletLeftUrlb+' quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="110" height="300" wmode=opaque></embed></div></div>');
		document.write('<div id="tcldivtf2"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+coupletWidth+'" height="'+coupletHeight+'" style="position:fixed;top:'+ coupletTop + 'px;right:0;z-index:998;" id="coupletRight"><param name="movie" value="'+coupletRightUrl+'" /><param name="quality" value="high" /><param name="wmode" value="opaque" /><embed src="'+coupletRightUrl+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+coupletWidth+'" height="'+coupletHeight+'" swliveconnect="true" name="coupletRight" wmode=opaque></embed></object><div id="tcldivtf2b" style="position:absolute;top:'+coupletTop+'px;right:0px;"><embed src='+coupletRightUrlb+' quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="110" height="300" wmode=opaque></embed></div></div>');
		//document.getElementById('coupletLeft').style.visibility = "hidden";
		//document.getElementById('coupletRight').style.visibility = "hidden";
	if (document.all){
		document.write('<script type="text/javascript" for="coupletLeft" event="FSCommand(command,args)">');
		document.write('coupletLeft_DoFSCommand(command,args)');
		document.write('<\/script>');
		document.write('<script type="text/javascript" for="coupletRight" event="FSCommand(command,args)">');
		document.write('coupletLeft_DoFSCommand(command,args)');
		document.write('<\/script>');
	}
	function coupletLeft_DoFSCommand(command,args){
	if (command == "quit"){
			document.getElementById('coupletLeft').style.visibility = "visible";
			document.getElementById('coupletRight').style.visibility = "visible";
		}
	}
	function coupletRight_DoFSCommand(command,args){
		coupletLeft_DoFSCommand(command,args);
	}

//var topFloatAdWidth = 750;
//var topFloatAdHeight = 500;

		var userAgent = navigator.userAgent;
		if(userAgent.indexOf('MSIE')>-1 && userAgent.indexOf('Opera')<0){oTcldivtf1b.style.visibility='hidden';}
		oTcldivtf1.onmouseover  = function(){oTcldivtf1b.style.visibility='visible';oTcldivtf2b.style.visibility='visible';}
		oTcldivtf1.onmouseout  = function(){oTcldivtf1b.style.visibility='hidden';oTcldivtf2b.style.visibility='hidden';}
		oTcldivtf2.onmouseover  = function(){oTcldivtf1b.style.visibility='visible';oTcldivtf2b.style.visibility='visible';}
		oTcldivtf2.onmouseout  = function(){oTcldivtf1b.style.visibility='hidden';oTcldivtf2b.style.visibility='hidden';}
		if(!isclosecouplet){
			oTcldivtf1b.style.visibility='visible';
			oTcldivtf2b.style.visibility='visible';
		}
}



/*滚动搜索*/
jq(document).ready(function(){
   jq("#maxtabs .maxcomw li a:first").css('color','#b40000');//公告第一条
    // 监听滚动事件
 jq(window).scroll(function(){ // 获得div的高度
         var h = jq(".maxright").offset().top;
         if(jq(this).scrollTop()>h && jq(this).scrollTop() < h+6000){
            // 滚动到指定位置
            jq(".rowwrap").addClass("show");
        } else {
            jq(".rowwrap").removeClass("show");
        }
    });
//
/*
//turn-r
  jq(window).scroll(function(e){
	   var h = jq(".maxAllwrap,.maxwIn").offset().top;
   if(jq(this).scrollTop()>h){
      jq(".appxb-one").click()
	  jq(this).unbind(e);
    };
	  jq.cookie("one_none",{expires:1});//设置cookie
  });
  if(jq.cookie("one_none")){  //如果cookie存在
	jq(".appxb-one").removeClass("appxb-one"); //设置div的样式为cookie的值
    };
*/
	jq(".appxb-header,.appxb-one").click(function(){
		  jq(".appxb-header").animate({left:'-137px'},function(){
			     var div=jq(".appxb-con");
		   div.animate({left:'-1%'},150);
		     div.animate({left:'0%'},1000);
    });
	jq(".appxb-con").show();
	});
		jq(".warp-close").click(function(){
		  jq(".appxb-con").animate({left:'-100%'},function(){
			  jq(".appxb-con").hide();
		    jq(".appxb-header").animate({left:'0'},"slow");
    });
	});
    });


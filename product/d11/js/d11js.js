//d11背景删除开始
		jq(document).ready(function(){
	 
	  
  jq(" a.close").click(function(){
   jq(".d11bg").hide();  
   	jq.cookie("d11_none","none",{expires:1});//设置cooki
      });
	  if(jq.cookie("d11_none")){  //如果cookie存在
	jq(".d11bg").css("display",jq.cookie("d11_none")); //设置div的样式为cookie的值
    };
	
});
//d11背景删除结束

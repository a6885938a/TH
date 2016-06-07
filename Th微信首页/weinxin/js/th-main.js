$(document).ready(function(){
 $(window).scroll(function(){
         var h = $(".floor").offset().top;
         if($(this).scrollTop()>h+200){
            $("#Top").removeClass("hide");
        } else {
            $("#Top").addClass("hide");
        }
    });
});

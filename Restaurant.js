$(window).scroll(function(){
    var scroll=$(this).scrollTop();
    console.log(scroll);
    if(scroll >567 && scroll <770){
        $(".about-coe img").addClass("animate__animated animate__flipInY");
    }
   else{  $(".about-coe img").removeClass("animate__animated animate__flipInY");}
})

$(".footer .awesoem-img img").click(function(){
    
//    $(this).css({
//        width:"500px",
//        opacity:"1",
//        height:"500px",
//        position:"absolute",
//         top:"-200px",
//        right: "210px"
//        
//    },function(){
//        $("html").css({opacity:"0.2",events:"none"});
//        
//    });
//    
    
});
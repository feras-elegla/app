$(".gear").click(function(){
    
    $(".ul-color").fadeToggle();
    $(".color-box i").toggleClass("fa-spin");
});

$(".color-box .ul-color ul li").eq(0).css("backgroundColor","crimson").end()
    .eq(1).css("backgroundColor","salmon").end()
    .eq(2).css("backgroundColor","blue").end()
    .eq(3).css("backgroundColor","chartreuse").end().
     eq(4).css("backgroundColor","fuchsia");


$(".color-box .ul-color ul li").click(function(){
  
    $("link[href*='theam']").attr("href",$(this).attr("data-value"))
})


$(document).ready(function(){
 
    $(".loader h1").fadeOut(1000,function(){
      
            $(".loader").fadeOut(1000,function(){
          $("body").css("overflow","auto");
          

      });}
      );  
        
    
});

$(window).scroll(function(){
    console.log($(this).scrollTop());


    var scroll=$(".scroll-top");
    var measur=$(this).scrollTop();
    
//    تفعيل  ال nicescroll
    $("html").niceScroll();
    if(measur >580){
       
       $(".testimonials").addClass("animate__animated animate__flipInY");
       }
    
//    تعمل نفس عمل ال If else 
//    measur >=700 ?scroll.fadeIn(1000) :scroll.fadeOut(1000);
     if(measur >=100 && measur <800){
  
         $(".team .team1").addClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInLeft"); 
         $(".team .team2").addClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInDown");
         $(".team .team3").addClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInUp");
         $(".team .team4").addClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInRight");}
    if(  measur >800 || measur <100){
        
        $(".team .team1").removeClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInLeft"); 
         $(".team .team2").removeClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInDown");
         $(".team .team3").removeClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInUp");
         $(".team .team4").removeClass(" animate__animated animate__heartBeat  animate__animated animate__bounceInRight");
    }
     if(measur >=900){
  
         $(".price-table .p").addClass("animate__animated animate__fadeInUpanimate__delay-4s animate__repeat-5  "); 
        }
    

   
  if(measur >=700){
    scroll.fadeIn(1000);
    
    }else{
      scroll.fadeOut(1000);  
    }
   

   });
   
   
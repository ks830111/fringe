$(function(){
   $('.depth2, .depth2_bg').hide(); 
   
   $('.depth1 > li').hover( 
     function(){       
       $(this).find('.depth2').stop().fadeIn();
       $('.depth2_bg').stop().slideDown();
     },
     function(){
       $('.depth2').stop().fadeOut();
       $('.depth2_bg').stop().slideUp();
     }
   );
});
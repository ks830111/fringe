/* hover-logo.js */

$(document).ready(function(){	
    $(".main_img").hover(function(){
        $(this).addClass("animated infinite tada delay-0.5s");},
        function(){
            $(this).removeClass("animated infinite tada delay-0.5s");
    });
    
});
    
    
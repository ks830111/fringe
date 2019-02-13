/* 우측 사이드 퀵메뉴 */
$(document).ready(function(){
    var currentPosition = parseInt($("#sidequick_menu").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop(); 
        $("#sidequick_menu").stop().animate({"top":position+currentPosition+"px"},1000);
    });
});
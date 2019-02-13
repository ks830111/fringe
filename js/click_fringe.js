$(function(){

    // ROOM
    $('.r_menu1').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.r_menu2').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.r_menu3').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.r_menu4').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    //SPECIAL
    $('.s_menu1').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.s_menu2').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.s_menu3').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.s_menu4').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.s_menu5').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });
    
    $('.s_menu6').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.s_menu7').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    $('.s_menu8').click(function(){
        $('.content_menu a').removeClass('select');
        $(this).addClass('select');
    });

    // 버튼 클릭시 위로 가기 금지
    $('.btn').on('click', function(){
    return false;
    });
  
});
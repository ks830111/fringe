$(function(){
    $('.content_menu > a.r_menu1').click(function(){
        $('.room_box > div').removeClass('show')
        $('.room_box .swim').addClass('show')
        return false;
    })

    $('.content_menu > a.r_menu2').click(function(){
        $('.room_box > div').removeClass('show')
        $('.room_box .saenggak').addClass('show')
        return false;
    })

    $('.content_menu > a.r_menu3').click(function(){
        $('.room_box > div').removeClass('show')
        $('.room_box .neukkim').addClass('show')
        return false;
    })

    $('.content_menu > a.r_menu4').click(function(){
        $('.room_box > div').removeClass('show')
        $('.room_box .haengbok').addClass('show')
        return false;
    })

});
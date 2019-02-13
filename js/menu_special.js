$(function(){
    console.log('hi')
    $('.special_menu > a.s_menu1').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image1').addClass('show')
        console.log('bye')
        return false;
    })
    
    $('.special_menu > a.s_menu2').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image2').addClass('show')
        return false;
    })

    $('.special_menu > a.s_menu3').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image3').addClass('show')
        return false;
    })

    $('.special_menu > a.s_menu4').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image4').addClass('show')
        return false;
    })

    $('.special_menu > a.s_menu5').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image5').addClass('show')
        return false;
    })

    $('.special_menu > a.s_menu6').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image6').addClass('show')
        return false;
    })

    $('.special_menu > a.s_menu7').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image7').addClass('show')
        return false;
    })

    $('.special_menu > a.s_menu8').click(function(){
        $('.special_images > div').removeClass('show')
        $('.special_images .special_image8').addClass('show')
        return false;
    })

});
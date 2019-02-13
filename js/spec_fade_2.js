$(document).ready(function() {
    $(window).scroll( function(){
        $('.txt_travel').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > 1400){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
});
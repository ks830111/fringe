$(document).ready(function() {
    $(window).scroll( function(){
        $('#room_info, #amenity').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
});

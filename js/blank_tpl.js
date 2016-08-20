$(document).ready(function(){
    // rwd menu --------------------------------------------
    if( $('nav').hasClass('clicked') ) {
        $('.RwdNav').css('background-color', '#212222');
    }
    else {
        $('.RwdNav').css('background-color', '#EFEEEE');
    }
    $('.RwdNav .icon_click_point').click(function(){
        $('.RwdNav .menu_icon').toggleClass('open');
        $('.RwdNav .menuSelection').toggle();
        $('.RwdNav').toggleClass('clicked');

        if( $('.RwdNav').hasClass('clicked') ) {
            $('.RwdNav').css('background-color', '#212222');
            $('.RwdNav .leftnav').css('color', '#fff');
            $('.RwdNav .logo').addClass('none_display');
        }
        else {
            $('.RwdNav').css('background-color', '#EFEEEE');
            $('.RwdNav .leftnav').css('color', '#000');
            $('.RwdNav .logo').removeClass('none_display');
        }
    });

    function closeRWDMenu(){
        $('.RwdNav .menu_icon').removeClass('open');
        $('.RwdNav .menuSelection').css('display', 'none');
        $('.RwdNav .leftnav').css('color', '#000');
        $('.RwdNav').removeClass('clicked');
        $('.RwdNav').css('background-color', '#EFEEEE');
    }
    $('.RwdNav .menuSelection').click(function(){
        closeRWDMenu();
    });

    $(window).resize(function() {
        if($(document).width() > 690){
            closeRWDMenu();
        }
    });

    // switch language -----------------------------------------
    $('.tw').hide();
    $('.tw_btn').click(function(){
        $('.en').hide();
        $('.tw').show();
    });
    $('.en_btn').click(function(){
        $('.en').show();
        $('.tw').hide();
    });

});

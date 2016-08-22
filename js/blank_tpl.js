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
    $('.en').hide();
    $('.tw_btn').click(function(){
        $('.RwdNav .logo').removeClass('none_display');
        $('.en').hide();
        $('.tw').show();
    });
    $('.en_btn').click(function(){
        $('.RwdNav .logo').removeClass('none_display');
        $('.en').show();
        $('.tw').hide();
    });

    // block fade in animation ---------------------------------
    // http://www.web2feel.com/freeby/scroll-effects/index4.html
    // https://daneden.github.io/animate.css/
    jQuery('.work_intro .block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100,
        classToRemove: 'hidden'
    });

});

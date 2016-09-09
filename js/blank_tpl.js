$(document).ready(function(){
    // rwd menu ----------------------------------------------------------------
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

    // switch language ---------------------------------------------------------
    // ---
    function resetLang(){
        $('.tw').hide();
        $('.en').hide();
    }

    function setLang(langCode){
        if (langCode == 'zh_TW'){
            resetLang();
            $('.tw_btn').addClass('active');
            $('.tw').show();
        }
        else if(langCode == 'en'){
            resetLang();
            $('.en_btn').addClass('active');
            $('.en').show();
        }
    }

    // get language cookie and set language
    var languageCookie = Cookies.get('language');
    if (languageCookie){
        setLang(languageCookie);
    }
    else{
        setLang('zh_TW');
    }

    // set cookie
    function setCookie(langCode){
        Cookies.set('language', language, { expires: 7 });
    }    
  
    $('.tw_btn').click(function(){      
        setLang('zh_TW');
        setCookie('zh_TW');     
    });

    $('.en_btn').click(function(){
        setLang('en');
        setCookie('en'); 
    });


    // block fade in animation -------------------------------------------------
    // http://www.web2feel.com/freeby/scroll-effects/index4.html
    // https://daneden.github.io/animate.css/
    jQuery('.work_intro .block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100,
        classToRemove: 'hidden'
    });

});

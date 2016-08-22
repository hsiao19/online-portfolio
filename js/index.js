// string format -------------------------------------------------
// usage : var fullName = 'Hello. My name is {0} {1}.'.format('FirstName', 'LastName');
// http://kevintsengtw.blogspot.tw/2011/09/javascript-stringformat.html
String.prototype.format = function () {
    var txt = this.toString();
    for (var i = 0; i < arguments.length; i++) {
        var exp = getStringFormatPlaceHolderRegEx(i);
        txt = txt.replace(exp, (arguments[i] == null ? "" : arguments[i]));
    }
    return cleanStringFormatResult(txt);
}
function getStringFormatPlaceHolderRegEx(placeHolderIndex) {
    return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm')
}
function cleanStringFormatResult(txt) {
    if (txt == null) return "";
    return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");

}

$(document).ready(function(){
    setLandingPageHeight();
    setInterval(function() {
        setLandingPageHeight();
    });

    // nav animation / change site title -----------------------------
    changeTitle();
    navAnimation();
    rwdNavChange();
    $(window).scroll(function() {
        changeTitle();
        navAnimation(); 
        rwdNavChange();
    });

    // rwd menu -------------------------------------------------
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
            var anchor = Math.round($(window).scrollTop());
            var homeEnd = $('#home').offset().top + $('#home').height();

            $('.RwdNav').css('background-color', '#EFEEEE');
            $('.RwdNav .leftnav').css('color', '#000');
            if(anchor > homeEnd){
                $('.RwdNav .logo').removeClass('none_display');
            }
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

    // jump to section animation --------------------------------
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

    // switch language -----------------------------------------
    $('.en').hide();
    $('.tw_btn').click(function(){
        var anchor = Math.round($(window).scrollTop());
        var homeEnd = $('#home').offset().top + $('#home').height();
        if(anchor > homeEnd){
            $('.RwdNav .logo').removeClass('none_display');
        }
        $('.en').hide();
        $('.tw').show();        
    });
    $('.en_btn').click(function(){
        var anchor = Math.round($(window).scrollTop());
        var homeEnd = $('#home').offset().top + $('#home').height();
        if(anchor > homeEnd){
            $('.RwdNav .logo').removeClass('none_display');
        }
        $('.en').show();
        $('.tw').hide();
    });

    // block fade in animation ---------------------------------
    // http://www.web2feel.com/freeby/scroll-effects/index4.html
    // https://daneden.github.io/animate.css/
    jQuery('#works .block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100,
        classToRemove: 'hidden'
    });


    // works filter --------------------------------------------
    $('#works .sub_title .label').click(function(e){
        e.preventDefault();
        var clickedId = $(this).attr('id');
        var $clickedLabel = $("#" + clickedId);
        var $activeLabel = $('#works .sub_title .label').filter(".active");
        $activeLabel.removeClass("active");
        $clickedLabel.addClass('active');

        var $show = $('#works .block').filter("." + clickedId);
        $show.show();
        $('#works .block').not($show).hide();

        // flash animation -----
        // http://www.web2feel.com/freeby/scroll-effects/index4.html
        // https://daneden.github.io/animate.css/
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
        $('#works .project_list').animateCss('fadeIn');
    });

});

function navAnimation(){
    var anchor = Math.round($(window).scrollTop());
    var homeEnd = $('#home').offset().top + $('#home').height();

    if (anchor > 0){
        $('.HomeNav').addClass('nav_shrink');
        $('.HomeNav .leftnav').removeClass('home_nav_label');
        $('.HomeNav .leftnav').addClass('home_nav_label_shrink');
        $('.HomeNav .rightnav').removeClass('home_nav_label');
        $('.HomeNav .rightnav').addClass('home_nav_label_shrink');
    }
    else {
        $('.HomeNav .HomeNav').removeClass('nav_shrink');
        $('.HomeNav .leftnav').removeClass('home_nav_label_shrink');
        $('.HomeNav .leftnav').addClass('home_nav_label');
        $('.HomeNav .rightnav').removeClass('home_nav_label_shrink');
        $('.HomeNav .rightnav').addClass('home_nav_label');
    }
    
    if (anchor < homeEnd){
        $('.HomeNav').removeClass('none_display');
        $('.NormalNav').addClass('none_display');
        $('.HomeNav').addClass('activeNav');
        $('.NormalNav').removeClass('activeNav');        
    }
    else {        
        $('.HomeNav').addClass('none_display');
        $('.NormalNav').removeClass('none_display');
        $('.HomeNav').removeClass('activeNav');
        $('.NormalNav').addClass('activeNav');
    }    
}

function changeTitle(){
    var anchor = Math.round($(window).scrollTop());
    var homeEnd = $('#home').offset().top + $('#home').height();
    if (anchor < homeEnd){
        document.title = "Yu-Tung, Hsiao";
    }
    else {        
        document.title = "Works | Yu-Tung, Hsiao";
    }    
}

function rwdNavChange(){
    var anchor = Math.round($(window).scrollTop());
    var homeEnd = $('#home').offset().top + $('#home').height();
    if (anchor < homeEnd){
        $('.RwdNav .logo').addClass('none_display');
        $('.RwdNav .leftnav').css('top', '20px');
    }
    else {
        if ( !$('.RwdNav').hasClass('clicked') ){
            $('.RwdNav .logo').removeClass('none_display');
            $('.RwdNav .leftnav').css('top', '17px');
        }       
    }  
}

function setLandingPageHeight(){
    var winHeight = $(window).height();
    var homeContentHeight = $('#home img').height() + $('#home .home_words').height();
    if (homeContentHeight < winHeight){
        var heightAdjustment = (winHeight - homeContentHeight) / 2;
        $('#home').css("padding-top", "{0}px".format(heightAdjustment * 1.1));
        $('#home').css("padding-bottom", "{0}px".format(heightAdjustment));
    }
}

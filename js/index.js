$(document).ready(function(){
    // nav animation / change title -----------------------------
    changeTitle();
    navAnimation();
    $(window).scroll(function() {
        changeTitle();
        navAnimation();        
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

    // block fade in animation ---------------------------------
    jQuery('#works .block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
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
    });    
});



function navAnimation(){
    var anchor = Math.round($(window).scrollTop());
    var homeEnd = $('#home').offset().top + $('#home').height();

    if (anchor > 0){
        $('.HomeNav').addClass('nav_shrink');
        $('.leftnav').removeClass('home_nav_label');
        $('.leftnav').addClass('home_nav_label_shrink');
        $('.rightnav').removeClass('home_nav_label');
        $('.rightnav').addClass('home_nav_label_shrink');
    }
    else {
        $('.HomeNav').removeClass('nav_shrink');
        $('.leftnav').removeClass('home_nav_label_shrink');
        $('.leftnav').addClass('home_nav_label');
        $('.rightnav').removeClass('home_nav_label_shrink');
        $('.rightnav').addClass('home_nav_label');
    }
    
    if (anchor < homeEnd){
        $('.HomeNav').removeClass('hidden');
        $('.NormalNav').addClass('hidden');
        $('.HomeNav').addClass('activeNav');
        $('.NormalNav').removeClass('activeNav');        
    }
    else {        
        $('.HomeNav').addClass('hidden');
        $('.NormalNav').removeClass('hidden');
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

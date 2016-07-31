$(document).ready(function(){
    navAnimation();
    $(window).scroll(function() {
        navAnimation();
    });

    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
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
    
    if (anchor >= homeEnd){
        $('.HomeNav').addClass('hidden');
        $('.NormalNav').removeClass('hidden');
    }
    else {
        $('.HomeNav').removeClass('hidden');
        $('.NormalNav').addClass('hidden');
    }    
}

$(function($){
    $('.bg-switcher').bgSwitcher({
        images:['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg'],
        interval: 5000,
        loop: true,
    });

    $(window).scroll(function (){
        $(".fadein").each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '20%',
    });
});
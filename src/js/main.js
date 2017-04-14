$(document).ready(function() {

    $('.header-nav-menu-item').hover(function() {
       var left = $(this).position().left;
        $(this).find('.header-nav-menu-item-submenu').css('left', -left).fadeToggle("200");
    })
    $('.header-nav-mobile__btn').click(function () {
        $(this).toggleClass('open');
        $('.header-nav-menu').slideToggle();
    });
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.header-nav-menu-item').off();

        $('.header-nav-menu-item.has-submenu').on('click', function() {


            $(this).toggleClass('active');
            $(this).find('.header-nav-menu-item-submenu').slideToggle();
        });
        $('.header-nav-menu-item-submenu').on('click', function(event) {
            event.stopPropagation();
        })
        $('.header-nav-menu-item-submenu a').on('click', function(event) {
            event.stopPropagation();
        })

    }
})
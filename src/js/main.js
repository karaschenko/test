$(document).ready(function() {
    $('.header-nav-menu-item').hover(function() {
       var left = $(this).position().left;
       $(this).find('.header-nav-menu-item-submenu').css('left', -left).fadeToggle('100');
    })
    $('.header-nav-menu-item-submenu-item').hover(function() {
        $(this).find('.header-nav-menu-item-submenu-item-categories').fadeToggle('100');
    })
    $('.header-nav-mobile__btn').click(function () {
        $(this).toggleClass('open');
        $('.header-nav-menu').slideToggle();
    });
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.header-nav-menu-item').off();
        $('.header-nav-menu-item-submenu-item').off();

        $('.header-nav-menu-item.has-submenu .show-sub-menu').on('click', function() {
            $(this).parent('.header-nav-menu-item').toggleClass('active');
            $(this).parent('.header-nav-menu-item').find('.header-nav-menu-item-submenu').slideToggle();
        });
        $('.header-nav-menu-item-submenu-item a').on('click', function() {
            $(this).parent('.header-nav-menu-item-submenu-item').find('.header-nav-menu-item-submenu-item-categories').slideToggle();
        })
        $('.header-nav-menu-item-submenu').on('click', function(event) {
            event.stopPropagation();
        })
        $('.header-nav-menu-item-submenu a').on('click', function(event) {
            event.stopPropagation();
        })
    }
})
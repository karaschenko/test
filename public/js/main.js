$(document).ready(function(){$(".header-nav-menu-item").hover(function(){var e=$(this).position().left;$(this).find(".header-nav-menu-item-submenu").css("left",-e).fadeToggle("200")}),$(".header-nav-mobile__btn").click(function(){$(this).toggleClass("open"),$(".header-nav-menu").slideToggle()}),window.matchMedia("(max-width: 768px)").matches&&($(".header-nav-menu-item").off(),$(".header-nav-menu-item.has-submenu").on("click",function(){$(this).toggleClass("active"),$(this).find(".header-nav-menu-item-submenu").slideToggle()}),$(".header-nav-menu-item-submenu").on("click",function(e){e.stopPropagation()}),$(".header-nav-menu-item-submenu a").on("click",function(e){e.stopPropagation()}))});
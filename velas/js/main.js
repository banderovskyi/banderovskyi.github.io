$(function(){function e(){var e,s,i=$(".nav-wrap"),o=$(".nav__item-drop a"),r=$(".nav__drop"),l=$(".mob-menu-header__btn");o.on("click",function(){var e=$(this).next();r.removeClass("nav__drop_mob-active"),e.addClass("nav__drop_mob-active"),s=e.height(),i.css("height",s)}),l.on("click",function(){var s=$(this).parents(".nav__drop").first();allDrops=$(this).parents(".nav__drop"),allDrops.addClass("nav__drop_mob-active"),s.removeClass("nav__drop_mob-active");var o=$($(this).parents(".nav  ul")[1]);e=o.height(),i.css("height",e),console.log(o)})}function s(e,s){var i,o,r=document.getElementsByClassName(s),l=function(e,s){i=e.slickCurrentSlide()+1,o=e.slideCount,$(r).text(i+"/"+o)};e.on("init",function(e,s){l(s)}),e.on("afterChange",function(e,s,i){l(s,i)})}function i(){var e=$(".review-item-main__more a");e.on("click",function(){var e=$(this).parents(".review-item"),s=e.index();console.log(s),$(".review-popup-slider").slick("slickGoTo",s)});var s=$(window).width();s<992&&$(".review-popup-slider .slick-list").css("width",s)}function o(){$(".overlay, .popup").fadeOut(),$("body").removeClass(".scroll-block")}$(window).on("scroll",function(){$(this).scrollTop()>200?($(".header").addClass("header_fixed"),$(".header-menu-container").addClass("header-menu-container_fixed")):($(".header").removeClass("header_fixed"),$(".header-menu-container").removeClass("header-menu-container_fixed"))}),$(".mob-menu-open").click(function(){$(".header-menu__main").toggleClass("header-menu__main_active"),$(this).toggleClass("mob-menu-open_active"),$(".header").toggleClass("header_menu-active"),$("body, html").toggleClass("scroll-block")}),e();var r=$(".cases-slider");r.length&&(s(r,"cases-slider__counter"),r.slick({infinite:!1,slidesToShow:3,slidesToScroll:1,prevArrow:$(".cases-slider-prev"),nextArrow:$(".cases-slider-next"),responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,variableWidth:!0,arrows:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!0}}]})),$(".partners-slider").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,variableWidth:!0,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1}}]}),$(".our-blog__images").slick({slidesToShow:2,slidesToScroll:2,autoplay:!1,mobileFirst:!0,arrows:!1,dots:!0,responsive:[{breakpoint:992,settings:"unslick"}]});var l=$(".cases-page-slider");l.length&&(s(l,"cases-slider__counter"),l.slick({infinite:!1,slidesToShow:1,slidesToScroll:1,prevArrow:$(".cases-slider-prev"),nextArrow:$(".cases-slider-next"),mobileFirst:!0,arrows:!0,dots:!1,variableWidth:!0,responsive:[{breakpoint:992,settings:"unslick"}]}));var n=$(".team-wrap");n.length&&(s(n,"team-counter"),n.slick({infinite:!1,slidesToShow:1,slidesToScroll:1,mobileFirst:!0,arrows:!1,dots:!1,variableWidth:!0,responsive:[{breakpoint:992,settings:"unslick"}]})),$(".certificate-slider").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,dots:!0,arrows:!1,variableWidth:!0,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1}}]}),$(".smi-wrap").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,mobileFirst:!0,arrows:!1,dots:!0,variableWidth:!1,responsive:[{breakpoint:992,settings:"unslick"}]}),$(".review-popup-slider").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0,responsive:[{breakpoint:992,settings:{arrows:!1,dots:!1}}]}),$(".review-wrap").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,mobileFirst:!0,arrows:!1,dots:!0,variableWidth:!1,responsive:[{breakpoint:992,settings:"unslick"}]}),i(),$("ul.tabs__caption").on("click","li:not(.active)",function(){$(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active")}),$(".open_popup").click(function(){var e=$("#"+$(this).attr("rel"));$(e).fadeIn(),$(e).parents(".overlay").fadeIn(),$("body").addClass(".scroll-block")}),$(".popup .close").click(function(){o()}),$(".overlay").click(function(){o()}).children().click(function(e){e.stopPropagation()})});
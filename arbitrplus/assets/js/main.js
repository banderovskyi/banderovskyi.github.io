$(function(){function o(){$(".overlay, .popup").fadeOut(),setTimeout(function(){$("html, body").css("overflow-y","overlay")},300)}$(".nav a, .flowing-scroll").on("click",function(){var o=$(this),t=o.attr("href");return void 0!==t&&""!==t&&$("html").animate({scrollTop:$(t).offset().top-50},500),!1}),$(".work-slider-init").owlCarousel({center:!0,margin:130,loop:!0,autoWidth:!0,items:1,nav:!0,dots:!1,responsive:{0:{nav:!1,dots:!0},992:{nav:!0,dots:!1}}}),$(".team-slider").owlCarousel({margin:0,loop:!0,nav:!0,responsive:{0:{items:1,nav:!1,dots:!0},992:{items:2,nav:!0,dots:!1}}}),$(".blog-card-slider").owlCarousel({margin:20,loop:!0,nav:!0,dots:!1,responsive:{0:{items:1,nav:!1,dots:!0},768:{items:2},992:{items:3,nav:!0,dots:!1}}}),$(".mob-btn-menu_open").click(function(){$(".mob-btn-menu_open").css("opacity","0"),$(".mob-menu").fadeIn(),$("html, body").css("overflow-y","hidden")}),$(".mob-btn-menu_close").click(function(){$(".mob-btn-menu_open").css("opacity","1"),$(".mob-menu").fadeOut(),$("html, body").css("overflow-y","auto")}),$(".mob-menu").on("click",function(o){o.target===this&&($(".mob-btn-menu_open").css("opacity","1"),$(".mob-menu").fadeOut(),$("html, body").css("overflow-y","auto"))}),$(".to-top").click(function(){$("html, body").animate({scrollTop:0},1e3)}),$(window).scroll(function(){$(window).scrollTop()>300?$(".to-top").addClass("to-top_active"):$(".to-top").removeClass("to-top_active")});var t=$(".footer");$(window).scroll(function(){var o=$(window).scrollTop()+$(window).height(),n=t.offset().top;o>n?($(".to-top").addClass("to-top_footer_active"),counter=1):$(".to-top").removeClass("to-top_footer_active")}),$(".accordion-row__title").on("click",function(){$(this).hasClass("accordion-row__title_active")?($(this).removeClass("accordion-row__title_active"),$(this).siblings(".accordion-row__content").slideUp(200)):($(".accordion-row__title").removeClass("accordion-row__title_active"),$(this).addClass("accordion-row__title_active"),$(".accordion-row__content").slideUp(200),$(this).siblings(".accordion-row__content").slideDown(200))}),$("#popup-response-oputput").find("h3").text,$(".mask-date").mask("99:99 99.99.9999"),$("select").selectric(),$(".open-popup").on("click",function(o){o.preventDefault();var t=$("#"+$(this).attr("rel"));$(t).fadeIn(),$("html, body").css("overflow-y","hidden")}),$(".popup .close").on("click",function(){o()}),$(".popup").on("click",function(){o()}).children().on("click",function(o){o.stopPropagation()});var n=$("#popup-consultation-specialist .input-specialist-name"),e=".team-card",i=".team-card__name",c=$(".team-card__btn a");c.on("click",function(){var o=$(this).parents(e).find(i).text().trim();n.val(o)})});
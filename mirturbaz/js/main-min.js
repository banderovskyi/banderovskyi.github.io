function btnClickColor(){document.querySelectorAll(".btn_color, .btn_form, .btn_border, .btn_gradient, .btn_sub").forEach(function(e){return e.addEventListener("click",function(t){function i(r){r-(n=n||r)<1e3&&requestAnimationFrame(i),r=(r-n)/500;var a=e.getBoundingClientRect(),o="".concat(t.x-a.x," ").concat(t.y-a.y,",").concat(r*Math.max(a.width,a.height));e.style.backgroundImage="-webkit-gradient(radial,".concat(o,",").concat(o,",from(rgba(255,255,255,").concat(.6-.6*r,")),to(#fff0))")}var n;requestAnimationFrame(i)})})}function nuberList(){$(".contact-city__link").click(function(e){e.preventDefault(),$(".contact-city__list").fadeToggle()})}function searchWindowOpen(){function e(e,i,n){e.click(function(e){i.fadeIn()}),t.not(e).focus(function(e){i.fadeOut()}),btnCloseDate.click(function(e){i.fadeOut()}),n&&$(document).mouseup(function(t){i.is(t.target)||0!==i.has(t.target).length||e.is(t.target)||i.fadeOut()})}var t=$("header header .search-item input");nameInput=$("header .search-item__name input"),dateInput=$("header .search-item__date input"),guestInput=$("header .search-item__guest"),btnCloseDate=$("header .search-drop .date-btn__item_left"),nameWindow=$("header .name"),dateWindow=$("header .date"),guestWindow=$("header .guest"),e($(".rooms .search-item__guest"),$(".rooms .guest"),!0),e(nameInput,nameWindow,!0),e(dateInput,dateWindow,!0),e(guestInput,guestWindow,!0)}function sliderInit(){var e=$(".sight-slider");e.each(function(){var e=$(this);e.owlCarousel({loop:!0,margin:30,nav:!1,dots:!1,responsive:{0:{items:1},992:{items:4}}}),$(".sight-slider__next").click(function(){e.trigger("next.owl.carousel")}),$(".sight-slider__prev").click(function(){e.trigger("prev.owl.carousel",[300])})})}function sliderCardInit(){var e=$(".card__thumb-slider");e.each(function(){var e=$(this);e.owlCarousel({loop:!0,margin:2,nav:!1,dots:!0,items:1});var t=e.parent().find(".card__thumb-arrow-next"),i=e.parent().find(".card__thumb-arrow-prev");t.click(function(){e.trigger("next.owl.carousel")}),i.click(function(){e.trigger("prev.owl.carousel",[300])})})}function popupSlider(){function e(e){if(e.namespace){var t=e.relatedTarget;$(".popup-slider-counter").text(t.relative(t.current())+1+"/"+t.items().length)}}var t=$(".popup-slider");t.each(function(){var t=$(this);t.owlCarousel({items:1,loop:!0,onInitialized:e,onTranslated:e});var i=t.parent().find(".card__thumb-arrow-next"),n=t.parent().find(".card__thumb-arrow-prew");i.click(function(){t.trigger("next.owl.carousel")}),n.click(function(){t.trigger("prev.owl.carousel")})}),dotcount=1,jQuery(".popup-slider .owl-dot").each(function(){jQuery(this).addClass("dotnumber"+dotcount),jQuery(this).attr("data-info",dotcount),dotcount+=1}),slidecount=1,jQuery(".owl-item").not(".cloned").each(function(){jQuery(this).addClass("slidenumber"+slidecount),slidecount+=1}),jQuery(".popup-slider .owl-dot").each(function(){grab=jQuery(this).data("info"),slidegrab=jQuery(".slidenumber"+grab+" img").attr("src"),jQuery(this).css("background-image","url("+slidegrab+")")}),amount=jQuery(".popup-slider .owl-dot").length,gotowidth=100/amount,jQuery(".popup-slider .owl-dot").css("width",gotowidth+"%"),newwidth=jQuery(".popup-slider .owl-dot").width(),jQuery(".popup-slider .owl-dot").css("height",newwidth+"px")}function thumbLike(){$(".card__thumb-like").click(function(){var e=$(this).find("div");e.toggleClass("icon-like-heart icon-like-heart-dims icon-like-heart-active icon-like-heart-active-dims")}),$(".page-title-buttons__item-like").click(function(){var e=$(this).find("div");e.toggleClass("icon-zc-like-heart-white icon-zc-like-heart-white-dims icon-zc-like-heart-active-min icon-zc-like-heart-active-min-dims")})}function popupInit(){$(".open_popup").click(function(){var e=$("#"+$(this).attr("rel"));$(e).fadeIn(),$(".overlay").fadeIn(),$("html").css("overflow","hidden")}),$(".popup .popup-close, .overlay").click(function(){$(".overlay, .popup").fadeOut(),$("html").css("overflow","auto")}),$(".room-info").on("click",function(e){e.target===this&&($(".overlay, .popup").fadeOut(),$("html").css("overflow","auto"))}),$(".input-popup-down__select").click(function(){$(".input-popup-down").fadeOut()})}function priceSliderInit(){jQuery("#pick-price").slider({min:0,max:1e3,values:[0,1e3],range:!0,stop:function(e,t){jQuery("input#minCost").val(jQuery("#pick-price").slider("values",0)),jQuery("input#maxCost").val(jQuery("#pick-price").slider("values",1))},slide:function(e,t){jQuery("input#minCost").val(jQuery("#pick-price").slider("values",0)),jQuery("input#maxCost").val(jQuery("#pick-price").slider("values",1))}}),jQuery("input#minCost").change(function(){var e=jQuery("input#minCost").val(),t=jQuery("input#maxCost").val();parseInt(e)>parseInt(t)&&(e=t,jQuery("input#minCost").val(e)),jQuery("#pick-price").slider("values",0,e)}),jQuery("input#maxCost").change(function(){var e=jQuery("input#minCost").val(),t=jQuery("input#maxCost").val();t>1e3&&(t=1e3,jQuery("input#maxCost").val(1e3)),parseInt(e)>parseInt(t)&&(t=e,jQuery("input#maxCost").val(t)),jQuery("#pick-price").slider("values",1,t)})}function kmSliderInit(){jQuery("#pick-km").slider({min:0,max:1e3,value:0,range:!1,stop:function(e,t){jQuery("input#maxkm").val(jQuery("#pick-km").slider("values",1))},slide:function(e,t){jQuery("input#maxkm").val(jQuery("#pick-km").slider("values",1))}}),jQuery("input#maxkm").change(function(){var e=jQuery("input#minkm").val(),t=jQuery("input#maxkm").val();t>1e3&&(t=1e3,jQuery("input#maxkm").val(1e3)),parseInt(e)>parseInt(t)&&(t=e,jQuery("input#maxkm").val(t)),jQuery("#pick-km").slider("values",1,t)})}function sortListSwich(){function e(e,t,i,n){e.fadeIn(),t.fadeOut(),i.addClass("sort__btn_active"),n.removeClass("sort__btn_active")}var t=$(".sort__btn-list"),i=$(".sort__btn-map"),n=$(".cards"),r=$(".cards-map");t.click(function(a){e(n,r,t,i)}),i.click(function(a){e(r,n,i,t)})}function ratingWidth(){var e=$(".rating-numbers-line"),t=$(".rating-numbers-line_numb");e.each(function(e,i){var n=$(i).find(t),r=n.attr("data-width");n.css("width",r+"%")})}function matetialFormsInit(){$(".mdc-text-field").each(function(e,t){mdc.textField.MDCTextField.attachTo(t)}),$(".mdc-select").each(function(e,t){mdc.select.MDCSelect.attachTo(t)})}function popupDropDownIndex(){function e(e,t){e.click(function(i){t.css("z-index","1100"),console.log(e,t)})}e($(".call-back .mdc-select"),$(".mdc-menu-surface"))}function reservNumberShow(){$(".reserv-numb-show span").on("click",function(){var e=$(this).parents(".reserv-numb-show");console.log(e),e.fadeOut()})}function fixBaseMenu(){var e=$(".page-nav"),t=$(".page-nav__buttons"),i=e.offset(),n=$(window).scrollTop();e.length>0&&($(window).scroll(function(){$(this).scrollTop()>i.top?(e.addClass("fix-nav"),t.addClass("fix-btn")):(e.removeClass("fix-nav"),t.removeClass("fix-btn"))}),n>i.top&&(e.addClass("fix-nav"),t.addClass("fix-btn")))}$(function(){btnClickColor(),searchWindowOpen(),sliderInit(),popupSlider(),popupInit(),priceSliderInit(),kmSliderInit(),sliderCardInit(),thumbLike(),sortListSwich(),nuberList(),ratingWidth(),matetialFormsInit(),popupDropDownIndex(),reservNumberShow(),fixBaseMenu()});
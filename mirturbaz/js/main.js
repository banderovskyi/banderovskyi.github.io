$(function () {
    btnClickColor();
    searchWindowOpen();
    sliderInit();
    popupSlider();
    popupInit();
    priceSliderInit();
    kmSliderInit();
    sliderCardInit();
    thumbLike();
    sortListSwich();
    nuberList();
    ratingWidth();
    matetialFormsInit();
    popupDropDownIndex();
    reservNumberShow();
    fixBaseMenu();
});
function btnClickColor() {
    document.querySelectorAll('.btn_color, .btn_form, .btn_border, .btn_gradient, .btn_sub').forEach(function (b) {
        return b.addEventListener('click', function (e) {
            var s;
            requestAnimationFrame(draw);

            function draw(t) {
                t - (s = s || t) < 1000 && requestAnimationFrame(draw);
                t = (t - s) / 500;
                var r = b.getBoundingClientRect();
                var p = "".concat(e.x - r.x, " ").concat(e.y - r.y, ",").concat(t * Math.max(r.width, r.height));
                b.style.backgroundImage = "-webkit-gradient(radial,".concat(p, ",").concat(p, ",from(rgba(255,255,255,").concat(0.6 - t * 0.6, ")),to(#fff0))");
            }
        });
    });
}

function nuberList() {
    $(".contact-city__link").click(function (e) {
        e.preventDefault();
        $(".contact-city__list").fadeToggle();
    });
}

function searchWindowOpen() {
    var searchInput = $("header header .search-item input");
    nameInput = $("header .search-item__name input"),
        dateInput = $("header .search-item__date input"),
        guestInput = $("header .search-item__guest"),
        btnCloseDate = $("header .search-drop .date-btn__item_left"),
        nameWindow = $("header .name"),
        dateWindow = $("header .date"),
        guestWindow = $("header .guest");
    windowSwich($('.rooms .search-item__guest'), $('.rooms .guest'), true);
    windowSwich(nameInput, nameWindow, true);
    windowSwich(dateInput, dateWindow, true);
    windowSwich(guestInput, guestWindow, true);
    function windowSwich(input, window, areaClick) {
        input.click(function (e) {
            window.fadeIn();
        });
        searchInput.not(input).focus(function (e) {
            window.fadeOut();
        });
        btnCloseDate.click(function (e) {
            window.fadeOut();
        });
        if (areaClick) {
            $(document).mouseup(function (e) {
                if (!window.is(e.target) && window.has(e.target).length === 0 && !input.is(e.target)) {
                    window.fadeOut();
                }
            });
        }
    }
}

function sliderInit() {
    var sightSlider = $('.sight-slider');
    sightSlider.each(function () {
        var sightSlider = $(this);
        sightSlider.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 4
                }
            }
        });
        $('.sight-slider__next').click(function () {
            sightSlider.trigger('next.owl.carousel');
        });
        $('.sight-slider__prev').click(function () {
            sightSlider.trigger('prev.owl.carousel', [300]);
        });

    });
}

function sliderCardInit() {
    var sightSlider = $('.card__thumb-slider');
    sightSlider.each(function () {
        var sightSlider = $(this);
        sightSlider.owlCarousel({
            loop: true,
            margin: 2,
            nav: false,
            dots: true,
            items: 1,
        });
        var next = sightSlider.parent().find('.card__thumb-arrow-next'),
            prew = sightSlider.parent().find('.card__thumb-arrow-prev');
        next.click(function () {
            sightSlider.trigger('next.owl.carousel');
        });
        prew.click(function () {
            sightSlider.trigger('prev.owl.carousel', [300]);
        });
    });
}

function popupSlider() {
    var popupSlider = $('.popup-slider');
    popupSlider.each(function () {
        var popupSlider = $(this);
        popupSlider.owlCarousel({
            items: 1,
            loop: true,
            onInitialized: counter,
            onTranslated: counter,
        });
        var next = popupSlider.parent().find('.card__thumb-arrow-next'),
            prew = popupSlider.parent().find('.card__thumb-arrow-prew');
        next.click(function () {
            popupSlider.trigger('next.owl.carousel');
        });
        prew.click(function () {
            popupSlider.trigger('prev.owl.carousel');
        });
    });

    function counter(event) {
        if (!event.namespace) {
            return;
        }
        var slides = event.relatedTarget;
        $('.popup-slider-counter').text(slides.relative(slides.current()) + 1 + '/' + slides.items().length);
    }
    dotcount = 1;

    jQuery('.popup-slider .owl-dot').each(function () {
        jQuery(this).addClass('dotnumber' + dotcount);
        jQuery(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });

    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;

    jQuery('.owl-item').not('.cloned').each(function () {
        jQuery(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });

    // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
    jQuery('.popup-slider .owl-dot').each(function () {

        grab = jQuery(this).data('info');

        slidegrab = jQuery('.slidenumber' + grab + ' img').attr('src');


        jQuery(this).css("background-image", "url(" + slidegrab + ")");

    });

    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
    // TO MAKE IT ALL NEAT 
    amount = jQuery('.popup-slider .owl-dot').length;
    gotowidth = 100 / amount;

    jQuery('.popup-slider .owl-dot').css("width", gotowidth + "%");
    newwidth = jQuery('.popup-slider .owl-dot').width();
    jQuery('.popup-slider .owl-dot').css("height", newwidth + "px");

}

function thumbLike() {
    $(".card__thumb-like").click(function () {
        var btn = $(this).find('div');
        btn.toggleClass('icon-like-heart icon-like-heart-dims icon-like-heart-active icon-like-heart-active-dims');
    });
    $(".page-title-buttons__item-like").click(function () {
        var btn = $(this).find('div');
        btn.toggleClass('icon-zc-like-heart-white icon-zc-like-heart-white-dims icon-zc-like-heart-active-min icon-zc-like-heart-active-min-dims');
    });
}

function popupInit() {
    $('.open_popup').click(function () {
        var popup_id = $('#' + $(this).attr("rel"));
        $(popup_id).fadeIn();
        $('.overlay').fadeIn();
        $('html').css('overflow', 'hidden');
    });
    $('.popup .popup-close, .overlay').click(function () {
        $('.overlay, .popup').fadeOut();
        $('html').css('overflow', 'auto');
    });
    $('.room-info').on('click', function (e) {
        if (e.target !== this)
            return;
        $('.overlay, .popup').fadeOut();
        $('html').css('overflow', 'auto');
    });
    $('.input-popup-down__select').click(function () {
        $('.input-popup-down').fadeOut();
    });
}

function priceSliderInit() {
    jQuery("#pick-price").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function (event, ui) {
            jQuery("input#minCost").val(jQuery("#pick-price").slider("values", 0));
            jQuery("input#maxCost").val(jQuery("#pick-price").slider("values", 1));
        },
        slide: function (event, ui) {
            jQuery("input#minCost").val(jQuery("#pick-price").slider("values", 0));
            jQuery("input#maxCost").val(jQuery("#pick-price").slider("values", 1));
        }
    });
    jQuery("input#minCost").change(function () {
        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            jQuery("input#minCost").val(value1);
        }
        jQuery("#pick-price").slider("values", 0, value1);
    });
    jQuery("input#maxCost").change(function () {
        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();
        if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000) }
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#pick-price").slider("values", 1, value2);
    });
}

function kmSliderInit() {
    jQuery("#pick-km").slider({
        min: 0,
        max: 1000,
        value: 0,
        range: false,
        stop: function (event, ui) {
            jQuery("input#maxkm").val(jQuery("#pick-km").slider("values", 1));
        },
        slide: function (event, ui) {
            jQuery("input#maxkm").val(jQuery("#pick-km").slider("values", 1));
        }
    });
    jQuery("input#maxkm").change(function () {
        var value1 = jQuery("input#minkm").val();
        var value2 = jQuery("input#maxkm").val();
        if (value2 > 1000) { value2 = 1000; jQuery("input#maxkm").val(1000) }
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            jQuery("input#maxkm").val(value2);
        }
        jQuery("#pick-km").slider("values", 1, value2);
    });
}

function sortListSwich() {
    var btnList = $('.sort__btn-list'),
        btnMap = $('.sort__btn-map'),
        cardsWrap = $('.cards'),
        mapWrap = $('.cards-map');
    function hide(wrap, wrap2, btn, btn2) {
        wrap.fadeIn();
        wrap2.fadeOut();
        btn.addClass('sort__btn_active');
        btn2.removeClass('sort__btn_active');
    }
    btnList.click(function (e) {
        hide(cardsWrap, mapWrap, btnList, btnMap);
    });
    btnMap.click(function (e) {
        hide(mapWrap, cardsWrap, btnMap, btnList);
    });
}

function ratingWidth() {
    var box = $('.rating-numbers-line'),
        line = $('.rating-numbers-line_numb');
    box.each(function (i, elem) {
        var thisLine = $(elem).find(line),
            thisWidth = thisLine.attr('data-width');
        thisLine.css('width', thisWidth + "%");
    });
}

function matetialFormsInit() {
    $('.mdc-text-field').each(function (i, obj) {
        mdc.textField.MDCTextField.attachTo(obj);
    });
    $('.mdc-select').each(function (i, obj) {
        mdc.select.MDCSelect.attachTo(obj);
    });
}

function popupDropDownIndex() {
    drop($('.call-back .mdc-select'), $('.mdc-menu-surface'));
    function drop(elem, list) {
        elem.click(function (e) {
            list.css('z-index', '1100')
            console.log(elem, list);
        });
    }
}

function reservNumberShow() {
    $(".reserv-numb-show span").on("click", function () {
        var showBlock = $(this).parents('.reserv-numb-show');
        console.log(showBlock);
        showBlock.fadeOut();
    });
}

function fixBaseMenu() {
    var nav = $('.page-nav'),
        button = $('.page-nav__buttons'),
        positionX = nav.offset(),
        screenPosition = $(window).scrollTop();
    if (nav.length > 0) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > positionX.top) {
                nav.addClass("fix-nav");
                button.addClass("fix-btn");
            } else {
                nav.removeClass("fix-nav");
                button.removeClass("fix-btn");
            }
        });
        if (screenPosition > positionX.top) {
            nav.addClass("fix-nav");
            button.addClass("fix-btn");
        }
    }
}
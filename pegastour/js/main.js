$(function (){
    // Sub menu init

    initSubMenu()
    function initSubMenu(){
        var navItem = $('.nav__item');

        navItem.hover(
        function () {
            var child = $(this).children('.sub-nav');
            if (!child.hasClass('active')) {
                child.show().addClass('active');
            }
        },
        function () {
            var child = $(this).children('.sub-nav');
            if (child.hasClass('active')) {
                child.hide().removeClass('active');
            }
        });
    }

    // Main slider init
    $('.main-slider').owlCarousel({
        margin: 0,
        items: 1,
        nav: true,
        stagePadding: 0,
        singleItem: true,
        loop: true,
    })

    // Mob menu
    toogleMobMenu();
    function toogleMobMenu(){
        var btnOpen = $('.nav__mob-btn-open'),
            btnClose = $('.nav__mob-btn-close'),
            wrapMenu = $('.nav__list');

        btnOpen.on('click', function(){
            if (!wrapMenu.hasClass('active')) {
                wrapMenu.fadeIn().addClass('active');
                $('html, body').css({
                    "overflow-y": "hidden",
                    "overflow-x": "hidden",
                });
            }
        });
        btnClose.on('click', function () {
            if (wrapMenu.hasClass('active')) {
                wrapMenu.fadeOut().removeClass('active');
                $('html, body').css({
                    "overflow-y": "auto",
                    "overflow-x": "hidden",
                });
            }
        });
    }

    // Review slider init
    $('.review-slider').owlCarousel({
        margin: 0,
        items: 3,
        nav: true,
        stagePadding: 0,
        loop: true,
        navText: ["<img src='img/ico-slider-white.svg'>", "<img src='img/ico-slider-white.svg'>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
});

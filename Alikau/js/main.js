$(function (){
    $('.header-slider, .review-wrap').slick({
        infinite: true,
        dots: true,
        arrows: false,
    });
    $('.open_popup').click(function() {
        var popup_id = $('#' + $(this).attr("rel"));
        $(popup_id).show();
        $('.overlay').show();
    })
    $('.popup .close, .overlay').click(function() {
        $('.overlay, .popup').hide();
    })
    $(".main-menu-hamburger").click(function(){
        $(".header .main-menu-nav").fadeIn();
    });
    $(".main-menu-close").click(function () { 
        $(".header .main-menu-nav").fadeOut();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCl7XHJcbiAgICAkKCcuaGVhZGVyLXNsaWRlciwgLnJldmlldy13cmFwJykuc2xpY2soe1xyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgJCgnLm9wZW5fcG9wdXAnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcG9wdXBfaWQgPSAkKCcjJyArICQodGhpcykuYXR0cihcInJlbFwiKSk7XHJcbiAgICAgICAgJChwb3B1cF9pZCkuc2hvdygpO1xyXG4gICAgICAgICQoJy5vdmVybGF5Jykuc2hvdygpO1xyXG4gICAgfSlcclxuICAgICQoJy5wb3B1cCAuY2xvc2UsIC5vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLm92ZXJsYXksIC5wb3B1cCcpLmhpZGUoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiLm1haW4tbWVudS1oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmhlYWRlciAubWFpbi1tZW51LW5hdlwiKS5mYWRlSW4oKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5tYWluLW1lbnUtY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAkKFwiLmhlYWRlciAubWFpbi1tZW51LW5hdlwiKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

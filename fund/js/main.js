$(function (){
    $('.nav ul li a').on('click', function () {
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if (dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
            );
        }
        return false;
    });

    if ($(window).width() <= '992') {
        $('.mob-menu-btn__open').on("click", function () {
            $(".header-nav").slideToggle();
        });
        $('.mob-menu-btn__close').on("click", function () {
            $(".header-nav").slideToggle();
        });
        $('.nav ul li a').on("click", function () {
            $(".header-nav").slideToggle();
        });
       
    }

    $(window).scroll(function () {
        var height = $(window).scrollTop();

        /*Если сделали скролл на 100px задаём новый класс для header*/
        if (height > 100) {
            $('.mob-menu-btn').addClass('mob-menu-btn_fix');
        } else {
            /*Если меньше 100px удаляем класс для header*/
            $('.mob-menu-btn').removeClass('mob-menu-btn_fix');
        }

    });
});

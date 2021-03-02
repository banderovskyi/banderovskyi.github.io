$(function () {
  $('.nav a, .flowing-scroll').on('click', function () {
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') {
      // проверяем существование
      $('html').animate(
        {
          scrollTop: $(dest).offset().top - 50, // прокручиваем страницу к требуемому элементу
        },
        500 // скорость прокрутки
      );
    }
    return false;
  });

  // Main page sliders
  $('.work-slider-init').owlCarousel({
    center: true,
    margin: 130,
    loop: true,
    autoWidth: true,
    items: 1,
    nav: true,
    dots: false,
    responsive: {
      0: {
        nav: false,
        dots: true,
      },
      992: {
        nav: true,
        dots: false,
      },
    },
  });
  $('.team-slider').owlCarousel({
    margin: 0,
    loop: true,
    // items: 2,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      992: {
        items: 2,
        nav: true,
        dots: false,
      },
    },
  });
  $('.blog-card-slider').owlCarousel({
    margin: 20,
    loop: true,
    // items: 3,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
        nav: true,
        dots: false,
      },
    },
  });

  // Mob menu settings
  $('.mob-btn-menu_open').click(function () {
    $('.mob-btn-menu_open').css('opacity', '0');
    $('.mob-menu').fadeIn();
    $('html, body').css('overflow-y', 'hidden');
  });
  $('.mob-btn-menu_close').click(function () {
    $('.mob-btn-menu_open').css('opacity', '1');
    $('.mob-menu').fadeOut();
    $('html, body').css('overflow-y', 'auto');
  });

  $('.mob-menu').on('click', function (e) {
    if (e.target !== this) return;

    $('.mob-btn-menu_open').css('opacity', '1');
    $('.mob-menu').fadeOut();
    $('html, body').css('overflow-y', 'auto');
  });

  // To top btn
  $('.to-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.to-top').addClass('to-top_active');
    } else {
      $('.to-top').removeClass('to-top_active');
    }
  });

  var $element = $('.footer');
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    var offset = $element.offset().top;

    if (scroll > offset) {
      $('.to-top').addClass('to-top_footer_active');
      counter = 1;
    } else {
      $('.to-top').removeClass('to-top_footer_active');
    }
  });

  // Accordion
  $('.accordion-row__title').on('click', function () {
    if ($(this).hasClass('accordion-row__title_active')) {
      $(this).removeClass('accordion-row__title_active');
      $(this).siblings('.accordion-row__content').slideUp(200);
    } else {
      $('.accordion-row__title').removeClass('accordion-row__title_active');
      $(this).addClass('accordion-row__title_active');
      $('.accordion-row__content').slideUp(200);
      $(this).siblings('.accordion-row__content').slideDown(200);
    }
  });

  $('#popup-response-oputput').find('h3').text;
  // Mask for date
  $('.mask-date').mask('99:99 99.99.9999');

  // Select init
  $('select').selectric();

  // Popup init
  $('.open-popup').on('click', function (e) {
    e.preventDefault();
    var popup_id = $('#' + $(this).attr('rel'));
    $(popup_id).fadeIn();
    $('html, body').css('overflow-y', 'hidden');
  });
  $('.popup .close').on('click', function () {
    closePopup();
  });

  $('.popup')
    .on('click', function () {
      // вешаем основной обработчик на родителя
      closePopup();
    })
    .children()
    .on('click', function (e) {
      // вешаем на потомков
      e.stopPropagation(); // предотвращаем всплытие
    });

  function closePopup() {
    $('.overlay, .popup').fadeOut();
    setTimeout(function () {
      $('html, body').css('overflow-y', 'overlay');
    }, 300);
  }

  // Add values in popup form
  var nameInput = $('#popup-consultation-specialist .input-specialist-name'),
    specialistCard = '.team-card',
    specialistName = '.team-card__name',
    specialistBtn = $('.team-card__btn a');

  specialistBtn.on('click', function () {
    var thisName = $(this)
      .parents(specialistCard)
      .find(specialistName)
      .text()
      .trim();
    nameInput.val(thisName);
  });

  // Fixed header on scroll
  // function toggleHeader() {
  //     var scroll_status = $(document).scrollTop(),
  //         footer_height = $(document).outerHeight()
  //                         - $('.footer').outerHeight()
  //                         - window.innerHeight ;
  //     if (scroll_status > 300 && scroll_status < footer_height){
  //         $(".header").addClass("header_fixed");
  //         $(".wrapper").css('padding-top', '155px');
  //     } else {
  //         $(".header").removeClass("header_fixed");
  //         $(".wrapper").css('padding-top', '0');

  //     }
  // }

  // function windowSize() {
  //     if ($(window).width() <= '992') {
  //         $(document).scroll(function () {
  //             toggleHeader();
  //         })
  //     }
  // };

  // $(window).on('load resize', windowSize);
});

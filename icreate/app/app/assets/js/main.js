$(function () {
  // Анимация появления заголовка
  $('.elem-fadein').addClass('elem-fadein_active');

  // Тоггл переключения языков
  langChangerInit();

  // Тоггл меню
  menuOpen();

  // Попап поиска
  openSearch();

  // Кнопка вверх
  toTop();

  // Настройка паралакса
  // paralaxElems();

  // Анимация елементов
  // -Главная работы
  $('.works-animation .work-card').each(function (i, elem) {
    elemAnimation(elem, 'work-card_active');
  });
  // -О себе этапы
  $('.work-stages-animation .work-stages-item').each(function (i, elem) {
    elemAnimation(elem, 'work-stages-item_active');
  });

  // Стилизация селектов
  selectStyling();
});

// Тоггл переключения языков
function langChangerInit() {
  var langChanger = $('.lang-changer'),
    langCurrent = $('.lang__current a');

  langChanger.click(function () {
    sub = $(this).find('.lang__sub');

    sub.slideToggle('fast');

    $(this).toggleClass('lang_active');
  });

  langCurrent.click(function (e) {
    e.preventDefault();
  });
}

function openSearch() {
  $('#open-search').click(function () {
    $('#popup-search').slideToggle();
    $(this).toggleClass('btn-search_active');
    $('html, body').toggleClass('scroll-block');
  });
}

// Тоггл меню
function menuOpen() {
  var btn = $('#menu-open'),
    menu = $('#menu'),
    menuPopup = $('#menu-popup');

  btn.click(function () {
    menuPopup.slideToggle();
    menu.toggleClass('menu_active');
    $(this).toggleClass('btn-burger_active');
    $('html, body').toggleClass('scroll-block');
  });
}

// Кнопка вверх
function toTop() {
  var btn = $('#to-top-btn');

  btn.click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      btn.addClass('to-top-btn_active');
    } else {
      btn.removeClass('to-top-btn_active');
    }
  });
}

// Настройка паралакса rellax.min.js
function paralaxElems() {
  var rellax = new Rellax('.paralax-elem');
  // {
  //   breakpoints: [576, 768, 1201]
  // }
}

// Анимация елементов
function elemAnimation(elemSelector, animationClass, animationSelector) {
  if ($(elemSelector).length > 0) {
    var target = $(elemSelector);
    var targetPos = target.offset().top + 300;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    var animationSelector = animationSelector
      ? animationSelector
      : elemSelector;
    $(window).scroll(function () {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem) {
        $(animationSelector).addClass(animationClass);
      }
    });
  }
}

// Стилизация селектов
function selectStyling() {
  $('select').each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      class: 'select-options',
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val(),
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active')
        .not(this)
        .each(function () {
          $(this).removeClass('active').next('ul.select-options').hide();
        });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      $styledSelect.addClass('select-styled_selected');
    });

    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
}

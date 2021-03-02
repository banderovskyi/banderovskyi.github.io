// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
var $ = require("jquery");
var inputmask = require('inputmask');
var validate = require('jquery-validation');

global.jQuery = $;
global.$ = $;


$(document).ready(function () {
  // Mobile menu toggle
  $('.btn-menu-open').click(function () {
    $('.header__nav').fadeIn().css('display', 'flex');
    $('html, body').css('overflow-y', 'hidden');
  });
  $('.btn-menu-close').click(function () {
    $('.header__nav').fadeOut();
    $('html, body').css('overflow-y', 'auto');
  });

  //Input phone mask
  var selector = document.querySelectorAll('input[name="phone"]');
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  
  $.validator.addMethod("requiredphone", function (value, element) {
    var phone = value.match(/_/g, '');
      return !phone;
    },
    " Заполните это поле");
  $('.form-contact').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 2,
        requiredphone: true
      },
      email: {
        required: true,
        minlength: 2,
        email: true
      }
    },
    messages: {
      name: {
        required: "Обязательно к заполнению",
        minlength: "Введите не менее 2-х символов в поле"
      },
      phone: {
        required: "Обязательно к заполнению",
        minlength: "Введен неверный номер"
      },
      email: {
        required: "Обязательно к заполнению",
        email: "Введен неверный email"
      },
    },
    submitHandler: function (form) { 
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
        }).done(function () {
          window.location = 'thank.html';
        });
    }
  });
  //E-mail Ajax Send
  // $(".form-contact").submit(function () { //Change
  //   var th = $(this);
  //   $.ajax({
  //     type: "POST",
  //     url: "mail.php", //Change
  //     data: th.serialize()
  //   }).done(function () {
  //     window.location = 'thank.html';
  //   });
  //   return false;
  // });

});
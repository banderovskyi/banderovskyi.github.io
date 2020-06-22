$(document).ready(function () {
  $('.burger-menu').click(function (e) { 
    e.preventDefault();
    $('.floating-menu').slideDown();
    $('.close-button').slideDown();
  });
  
  $('.close-button').click(function (e) { 
    e.preventDefault();
    $('.floating-menu').slideUp();
    $('.close-button').slideUp();
  });
});
$(function (){
  $('.banner__circle').on('click', function(e){
    e.preventDefault(); 
    var section = $('section');
    var h = $(section[0]); 
    $('html, body').animate({
      scrollTop: h.offset().top
    }, 700);
  });

$('#mobile__hamburger').on('click', function(){
  $('.mobile-menu').fadeToggle(500);
});

$('.reviwes__slider').slick({
	dots: true,
	arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
      }
    }
    ]
});


})
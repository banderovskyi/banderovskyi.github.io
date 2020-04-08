$(document).ready(function() {
	/**
	 * Send form
	 */
	// var idForm = '#_indexForm';
	// $(idForm).submit(function(){
	// 	$(idForm + ' button').html('Expediem, așteptați...');
	// });

	/**
	 * reCaptcha.
	 * Security send form
	 * @link https://developers.google.com/recaptcha/docs/v3
	 */
	// grecaptcha.ready(function() {
   //    grecaptcha.execute('[key]', {
   //       action: 'homepage'
   //    }).then(function(token) {
   //       console.log(token);
   //       document.getElementById('g-recaptcha-response').value=token;
   //    });
	// });

	/**
	 * owlCarousel.
	 * @link https://owlcarousel2.github.io/OwlCarousel2/
	 */
   // function count(event) {
   //    if (!event.namespace) {
   //       return;
   //    }
   //    var carousel = event.relatedTarget;
   //    $('.block').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
   // }
   // $('.owl-carousel').owlCarousel({
   //    loop: false,
   //    margin: 0,
	//    nav: false,
	//		dots: false,
   //    lazyLoad: true,
   //    onChanged: count,
	// 	touchDrag: false,
	//		items: 3,
	// 	responsive: {
	// 		0: {
	// 			items: 2
	// 		},
	// 		768: {
	// 			items: 2
	// 		},
	// 		992: {
	// 			items: 2
	// 		},
	// 		1200: {
	// 			items: 2
	// 		}
	// 	}
   // })
   // // Go to the previous item
   // $('.slider-prev').click(function () {
   //    $('.owl-carousel').trigger('prev.owl.carousel');
   // })
   // // Go to the next item
   // $('.slider-next').click(function () {
   //    $('.owl-carousel').trigger('next.owl.carousel');
	// });

	$('.block-2 .slider').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		items: 4,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
		},
	});

	$('.block-6 .silder').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		items: 3,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
		},
	});
	
});

/**
 * Animate.
 * @link https://github.com/dirkgroenen/jQuery-viewport-checker
 * @link https://daneden.github.io/animate.css/
 */
// $(".block").addClass("hidden").viewportChecker({
// 	classToAdd: 'visible animated fadeIn',
// 	offset: 100
// });

/**
 * Accordion.
 * @link https://jqueryui.com/accordion/
 */
// $("#accordion").accordion({
// 	active: 20,
// 	heightStyle: "content", // Adaptive height
// 	event: "focusin"
// });
$(document).ready(function() {
	// Form
	var idForm = '#_indexForm';
	$(idForm).submit(function(){
		$(idForm + ' button').html('Expediem, așteptați...');
	});
	
	// reCaptcha
	// grecaptcha.ready(function() {
   //    grecaptcha.execute('[key]', {
   //       action: 'homepage'
   //    }).then(function(token) {
   //       console.log(token);
   //       document.getElementById('g-recaptcha-response').value=token;
   //    });
	// });
	
	// SCROLL EFECT
	// $(function() {  
	//     // Default scroll
	//     jQuery.scrollSpeed(100, 600);		    
	// });


	// Block 2 slider init
	$('.block-2 .slider')
	.on('initialized.owl.carousel changed.owl.carousel', function (e) {
		if (!e.namespace) {
			return;
		}
		var carousel = e.relatedTarget;
		$('.block-2 .counter').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
	})
	.owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 4,
		responsive: {
			0: {
				items: 2,
			},
			768: {
				items: 4,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		},
	});

	// Block 4 slider init
	$('.block-4 .slider')
	.on('initialized.owl.carousel changed.owl.carousel', function (e) {
		if (!e.namespace) {
			return;
		}
		var carousel = e.relatedTarget;
		$('.block-4 .counter').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
	})
	.owlCarousel({
		loop: true,
		margin: 18,
		nav: true,
		center: true,
		responsive: {
			0: {
				items: 1,
				autoWidth: false,
			},
			768: {
				items: 3,
				autoWidth: true,
			},
		},
	});

	
	//Mobile menu toggle
	$('.mob-btn-open').on('click',function(){
		$('.block-1 .mob-menu').fadeIn();
	});
	$('.mob-btn-close').on('click', function () {
		$('.block-1 .mob-menu').fadeOut();
	});
});



// ANIMATE
$(".block").addClass("hidden").viewportChecker({
	classToAdd: 'visible animated fadeIn',
	offset: 100
});

// ACORDION
// $("#accordion").accordion({
// 	active: 20,
// 	heightStyle: "content", // Adaptive height
// 	event: "focusin"
// });
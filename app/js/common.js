$(function() {

	// Mmenu
	$('#my-menu').mmenu({
		extensions: [
			'theme-black',
			'effect-menu-slide',
			'pagedim-black'
		],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="S&amp;Milter">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	
	var apiMmenu = $('#my-menu').data('mmenu');
	apiMmenu.bind('opened', function() {
		$('#js-menu-btn').addClass('is-active');
	}).bind('closed', function() {
		$('#js-menu-btn').removeClass('is-active');
	});


	/* OWL CAROUSEL */
	$('.js-carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselServiceHeight();
		}, 100);
	});

	$('.js-carousel-services').owlCarousel({
		nav: true,
		smartSpeed: 700,
		dots: false,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	$('.js-review-carousel').owlCarousel({
		nav: false,
		smartSpeed: 700,
		dots: true,
		loop: true,
		autoHeight: true,
		items: 1
	});


	function carouselServiceHeight() {
		$('.carousel-services__item').each(function() {
			var 
				ths 		 = $(this),
				thsHeight = ths.find('.carousel-services__item-content').outerHeight();

			ths.find('.carousel-services__item-img').css('min-height', thsHeight);

		});
	} carouselServiceHeight();

	
	/* END OWL CAROUSEL */


	// commin
	$('.js-carousel-services__item-title').each(function() {
		var ths  = $(this);
		ths.html( ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function() {
		var ths  = $(this);
		ths.html( ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	

	/* Scripts for resize page */
	function onResize() {
		$('.carousel-services__item-composition').equalHeights();
	} onResize();
	
	window.onresize = function () {
		onResize();
	};



	/* FORMS */
	$("#js-callback").submit(function() { //Change
		var ths = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: ths.serialize()
		}).done(function() {
			$(ths).find('.callback__success').addClass('callback__success_active').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(ths).find('.callback__success').removeClass('callback__success_active').fadeOut();
				ths.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('select').selectize({
		create: true,
 	});

});
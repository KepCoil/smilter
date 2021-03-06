$(window).on('load', function () {
	$('#js-preloader').delay(1000).fadeOut('slow');
});


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
			0:   {items: 1},
			768: {items: 2},
			992: {items: 3}
		}
	});

	function carouselServiceHeight() {
		$('.carousel-services__item').each(function() {
			var 
				ths 		 = $(this),
				thsHeight = ths.find('.carousel-services__item-content').outerHeight();

			ths.find('.carousel-services__item-img').css('min-height', thsHeight);

		});
	} carouselServiceHeight();


	$('.js-review-carousel').owlCarousel({
		nav: false,
		smartSpeed: 700,
		dots: true,
		loop: true,
		autoHeight: true,
		items: 1
	});

	$('.js-partners-carousel').owlCarousel({
		nav: true,
		smartSpeed: 700,
		dots: false,
		loop: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0:    {items: 1},
			576:  {items: 2},
			992:  {items: 3},
			1200: {items: 4}
		}
	});

	
	/* END OWL CAROUSEL */


	// commom function
	$('.js-carousel-services__item-title').each(function() {
		var ths  = $(this);
		ths.html( ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function() {
		var ths  = $(this);
		ths.html( ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});


	// btn top
	$(window).scroll(function() {

		if ( $(this).scrollTop() > $(this).height() ) {
			$("#js-btn-top").addClass('btn-top_active');
		}
		else {
			$("#js-btn-top").removeClass('btn-top_active');
		}
	});

	$('#js-btn-top').click(function() {
		$('html, body').stop().animate(
			{scrollTop: 0},
			'slow',
			'swing'
		)
	});

	/*preloader*/


	

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

	// Init selectize
	$('select').selectize({
		create: true,
 	});

});
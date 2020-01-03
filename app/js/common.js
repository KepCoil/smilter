$(function() {


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

});
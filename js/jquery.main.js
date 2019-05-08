jQuery(function() {
	//initMasonry();
	initIsotope();
	initFlickity();
	//initParallax();
});

function initMasonry() {
	$('.masonry').masonry({
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: 200,
	  resize: true
	});
}

function initIsotope() {
	// init Isotope
	var $grid = $('.isotope').isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});
	// filter items on button click
	$('.filter-button').on( 'click', function(e) {
		$('.filter-button').each(function() {
			$(this).removeClass('active');
		});
		e.preventDefault();
		$(this).addClass('active');
		$('.filter-open').text($('.filter-button.active').text());
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		$('.filter-open').siblings('.filter-block').toggleClass('filter-active');
	});

	$('.filter-open').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.filter-block').toggleClass('filter-active');
	});
}

function initFlickity() {
	$('.card-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  pageDots: false
	});
}

function initParallax() {
	$('.parallax-window').parallax({});
}

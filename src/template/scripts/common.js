$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	


	var eventsList = $('.main-events__list'),
			eventsNav = $('.main-events__nav'),
			galleryCortege = $('.gallery__cortege'),
			logos = $('.logos__list');

	eventsList.slick({
		fade: true,
		asNavFor: eventsNav,
		arrows: false
	});

	eventsNav.slick({
		slidesToShow: 3,
		asNavFor: eventsList,
		focusOnSelect: true
	});

	galleryCortege.slick({
		arrows: false,
		dots: true
	})

	logos.slick({
		slidesToShow: 5
	})

});

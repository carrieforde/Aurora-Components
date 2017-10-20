/**
 * Carousel
 */
( function() {

	var carousels = document.querySelectorAll('.carousel');

	function changeSlides(el) {

		var carousel     = el.parentElement.parentElement,
			currentDot   = carousel.querySelector('.carousel__dots .is-active'),
			currentSlide = carousel.querySelector('.carousel__slide.is-active'),
			target       = el.getAttribute('href'),
			newSlide     = carousel.querySelector(target);

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		el.classList.add('is-active');
		newSlide.classList.add('is-active');
	}

	function advanceSlides(el) {

		var carousel     = el.parentElement.parentElement,
			currentDot   = carousel.querySelector('.carousel__dots .is-active'),
			nextDot      = currentDot.nextElementSibling,
			currentSlide = carousel.querySelector('.carousel__slide.is-active'),
			nextSlide    = currentSlide.nextElementSibling;

		// If we're on the last slide, let's go back to the beginning.
		if (nextDot === null) {
			nextDot = carousel.querySelector('.carousel__dots a');
			nextSlide = carousel.querySelector('.carousel__slide');
		}

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		nextDot.classList.add('is-active');
		nextSlide.classList.add('is-active');
	}

	function reverseSlides(el) {
		var carousel     = el.parentElement.parentElement,
			currentDot   = carousel.querySelector('.carousel__dots .is-active'),
			prevDot      = currentDot.previousElementSibling,
			currentSlide = carousel.querySelector('.carousel__slide.is-active'),
			prevSlide    = currentSlide.previousElementSibling;

		// If we're on the first slide, let's go to the end.
		if (prevDot === null) {
			prevDot = carousel.querySelectorAll('.carousel__dots a');
			prevDot = prevDot[prevDot.length - 1];
			prevSlide = carousel.querySelectorAll('.carousel__slide');
			prevSlide = prevSlide[prevSlide.length - 1];
		}

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		prevDot.classList.add('is-active');
		prevSlide.classList.add('is-active');
	}

	function fireClickEvents(event) {

		var el = event.target;
		
		if (el.classList.contains('carousel__button--next') || el.classList.contains('fa-chevron-right')) {

			if (el.classList.contains('fa-chevron-right')) {
				el = el.parentElement;
			}

			advanceSlides(el);
		}

		if (el.classList.contains('carousel__button--previous') || el.classList.contains('fa-chevron-left')) {

			if (el.classList.contains("fa-chevron-left")) {
				el = el.parentElement;
			}
			
			reverseSlides(el);
		}

		if (el.tagName.toLowerCase() === 'a') {
			event.preventDefault();

			changeSlides(el);
		}
	}

	for ( var i = 0, len = carousels.length; i < len; i++) {
		carousels[i].addEventListener('click', fireClickEvents);
	}
})();

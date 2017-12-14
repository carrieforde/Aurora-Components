/**
 * Carousel
 */
(function() {

	function changeSlides(el) {

		var carousel     = el.closest('.carousel'),
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

		var carousel     = el.closest('.carousel'),
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
		var carousel     = el.closest('.carousel'),
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

	function handleClickEvents (event) {

		var target = event.target;
		
		if (target.classList.contains('carousel__button--next') || target.classList.contains('fa-chevron-right')) {

			if (target.classList.contains('fa-chevron-right')) {
				target = target.parentElement;
			}

			advanceSlides(target);
		}

		if (target.classList.contains('carousel__button--previous') || target.classList.contains('fa-chevron-left')) {

			if (target.classList.contains('fa-chevron-left')) {
				target = target.parentElement;
			}
			
			reverseSlides(target);
		}

		if (target.tagName.toLowerCase() === 'a') {
			event.preventDefault();

			changeSlides(target);
		}
	}

	document.addEventListener('click', handleClickEvents);
})();

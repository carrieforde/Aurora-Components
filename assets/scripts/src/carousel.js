/**
 * Carousel
 */
(function() {

	'use strict';

	/**
	 * Sets the active slide and dot.
	 * 
	 */
	function setActiveSlide () {

		var carousels = document.querySelectorAll('.carousel');

		carousels.forEach(carousel => {
			var slide = carousel.querySelector('.carousel__slide'),
				dot = carousel.querySelector('.carousel__dots a');

			slide.classList.add('is-active');
			dot.classList.add('is-active');
		});
	}

	/**
	 * Changes slides when carousel dot is clicked.
	 * 
	 * @param  {string}  el  The target dot.
	 */
	function changeSlides (el) {

		var carousel     = el.closest('.carousel'),
			currentDot   = carousel.querySelector('.carousel__dots .is-active'),
			currentSlide = carousel.querySelector('.carousel__slide.is-active'),
			target       = el.getAttribute('href'),
			newSlide;

		target = target.substring(1, target.length);
		newSlide = document.getElementById(target);

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		el.classList.add('is-active');
		newSlide.classList.add('is-active');
	}

	/**
	 * Advances slides.
	 * 
	 * @param  {string}  el  The instance of the next arrow button.
	 */
	function advanceSlides (el) {

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

	/**
	 * Reverses slides.
	 * 
	 * @param  {string}  el  The instance of the previous slide button.
	 */
	function reverseSlides (el) {
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

	/**
	 * Determines which function to fire on a click event.
	 * 
	 * @param {any} event 
	 */
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

		if (target.parentElement.classList.contains('carousel__dots')) {
			event.preventDefault();

			changeSlides(target);
		}
	}

	document.addEventListener('click', handleClickEvents);
	window.addEventListener('load', function() {
		setTimeout(() => {
			setActiveSlide();
		}, 500);
	})
})();

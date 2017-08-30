/**
 * Carousel
 */
( function( window ) {

	// Get global variables.
	var thumbs = document.querySelectorAll( 'li' );

	/**
	 * Change slides when thumbnail is clicked.
	 * 
	 */
	var changeSlide = function() {
		 
		var slides = document.querySelectorAll( '.carousel__image' ),
			activeSlide,
			newSlide;

		// Cycle through slides...
		for ( var i = 0; i < slides.length; i++ ) {

			// Figure out which slide is currently active.
			if ( slides[i].classList.contains( 'is-active' ) ) {
				activeSlide = slides[i];
			}

			// Figure our which slide needs to be active.
			if ( slides[i].dataset.slide === this.dataset.thumb ) {
				newSlide = slides[i];
			}
		}
		
		// Update classes.
		activeSlide.classList.remove( 'is-active' );
		newSlide.classList.add( 'is-active' );
	}

	// Add event listeners to thumbails.
	for ( var i = 0; i < thumbs.length; i++ ) {
		thumbs[i].addEventListener( 'click', changeSlide );
	}
})( window );

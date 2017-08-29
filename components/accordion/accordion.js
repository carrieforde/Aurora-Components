/**
 * Accordion scripts.
 */
( function( window ) {

	// Get global variables.
	var accordion = document.getElementById( 'accordion' ),
		headings  = accordion.querySelectorAll( 'h2' );

	/**
	 * Show content of currently selected accordion tab.
	 * 
	 */
	var showContent = function() {

		// Get local variables.
		var currentActive = document.querySelector( '.is-active' ),
			parentLi      = this.parentNode;

		// Remove & add is-active class accordingly.
		currentActive.classList.remove( 'is-active' );
		parentLi.classList.add( 'is-active' );
	};

	// Add event listeners.
	for ( var i = 0; i < headings.length; i++ ) {
		headings[i].addEventListener( 'click', showContent );
	}
})( window );

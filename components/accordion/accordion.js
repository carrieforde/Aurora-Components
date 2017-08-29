/**
 * Accordion scripts.
 */
( function( window ) {

	// Get global variables.
	var accordion = document.getElementById( 'accordion' ),
		items     = accordion.querySelectorAll( 'li' );

	/**
	 * Show content of currently selected accordion tab.
	 * 
	 */
	var showContent = function() {

		// Get local variables.
		var currentActive = document.querySelector( '.is-active' );

		// Remove & add is-active class accordingly.
		currentActive.classList.remove( 'is-active' );
		this.classList.add( 'is-active' );
	};

	// Add event listeners.
	for ( var i = 0; i < items.length; i++ ) {
		items[i].addEventListener( 'click', showContent );
	}
})( window );

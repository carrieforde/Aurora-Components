/**
 * Tabs Scripts
 */
( function( window ) {

	// Set up global variables.
	var component = document.getElementById( 'tabs' ),
		tabs      = component.querySelectorAll( '.tabs__nav li' );

	/**
	 * Show tab content based on selected tab.
	 * 
	 * @param  {any}  event 
	 */
	var showTabContent = function( event ) {

		// Prevent default action of following link.
		event.preventDefault();

		// Set up function variables.
		var tabID         = this.querySelector( 'a' ).getAttribute( 'href' ),
			activeTab     = document.querySelector( 'li.is-active' ),
			activeContent = document.querySelector( '.tabs__content.is-active' ),
			newContent;

		// Strip # from href.
		tabID = tabID.substring( 1, tabID.length );

		// Pass tabID to get new tab.
		newContent = document.getElementById( tabID );

		// Remove class from previously selected tab & tab content.
		activeTab.classList.remove( 'is-active' );
		activeContent.classList.remove( 'is-active' );
		
		// Add class to newly selected tab & tab content.
		this.classList.add( 'is-active' );
		newContent.classList.add( 'is-active' );
	};

	// Add event listener to individual tabs.
	for ( var i = 0; i < tabs.length; i++ ) {
		tabs[i].addEventListener( 'click', showTabContent );
	}
})( window );

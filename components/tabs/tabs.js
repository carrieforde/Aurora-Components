/**
 * Tabs Scripts
 */
( function( window ) {

	// Set up global variables.
	var tabs = document.querySelectorAll( '.tabs' );

	/**
	 * Show tab content based on selected tab.
	 * 
	 * @param  {any}  event 
	 */
	var showTabContent = function(el) {

		// Prevent default action of following link.
		event.preventDefault();

		// Set up function variables.
		var	tabComponent  = el.parentElement.parentElement.parentElement,
			tabID         = el.getAttribute('href'),
			activeTab     = tabComponent.querySelector( 'li.is-active' ),
			activeContent = tabComponent.querySelector( '.tabs__content.is-active' ),
			newContent;

		// Strip # from href.
		tabID = tabID.substring( 1, tabID.length );

		// Pass tabID to get new tab.
		newContent = tabComponent.getElementById( tabID );

		// Remove class from previously selected tab & tab content.
		activeTab.classList.remove( 'is-active' );
		activeContent.classList.remove( 'is-active' );
		
		// Add class to newly selected tab & tab content.
		el.parentElement.classList.add( 'is-active' );
		newContent.classList.add( 'is-active' );
	};

	/**
	 * Fires events based on event target.
	 * 
	 * @param {any} event 
	 */
	var fireEvents = function (event) {
		
		if (event.target.tagName.toLowerCase() === 'a') {
			showTabContent(event.target);
		}
	}

	// Add event listener to tab component(s).
	for ( var i = 0; i < tabs.length; i++ ) {
		tabs[i].addEventListener( 'click', fireEvents );
	}
})( window );

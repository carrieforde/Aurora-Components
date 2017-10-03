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
		newContent = document.getElementById( tabID );

		// Remove class from previously selected tab & tab content, update ARIA attributes.
		deactivateTab(activeTab, activeContent);
		
		// Add class to newly selected tab & tab content, update ARIA attributes.
		activateTab(el.parentElement, newContent);
	};

	/**
	 * Update classes and attributes for inactive tab & panel.
	 * 
	 * @param {any} tab 
	 * @param {any} panel 
	 */
	var deactivateTab = function (tab, panel) {
		
		tab.setAttribute('aria-selected', 'false');
		tab.classList.remove('is-active');
		panel.removeAttribute('aria-expanded');
		panel.setAttribute('aria-hidden', 'true');
		panel.classList.remove('is-active');
	}

	/**
	 * Update classes and attributes for active tab & panel.
	 * 
	 * @param {any} tab 
	 * @param {any} panel 
	 */
	var activateTab = function (tab, panel) {
		
		tab.setAttribute('aria-selected', 'true');
		tab.classList.add('is-active');
		panel.removeAttribute('aria-hidden');
		panel.setAttribute('aria-expanded', 'true');
		panel.classList.add('is-active');
	}

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

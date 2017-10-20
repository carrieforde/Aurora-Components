/**
 * Tabs Scripts
 */
( function() {

	// Set up global variables.
	var tabs = document.querySelectorAll( '.tabs' );

	/**
	 * Show tab content based on selected tab.
	 * 
	 * @param  {any}  event 
	 */
	function showTabContent(el) {

		// Prevent default action of following link.
		event.preventDefault();

		// Set up function variables.
		var	tabComponent   = el.parentElement.parentElement.parentElement,
			tabID          = el.getAttribute('href'),
			currentTab     = tabComponent.querySelector( 'li.is-active a' ),
			currentContent = tabComponent.querySelector( '.tabs__content.is-active' ),
			newContent;

		// Pass tabID to get new tab.
		newContent = tabComponent.querySelector( tabID );

		// Remove class from previously selected tab & tab content, update ARIA attributes.
		deactivateTab(currentTab, currentContent);
		
		// Add class to newly selected tab & tab content, update ARIA attributes.
		activateTab(el, newContent);
	};

	/**
	 * Update classes and attributes for inactive tab & panel.
	 * 
	 * @param {any} tab 
	 * @param {any} panel 
	 */
	function deactivateTab(tab, panel) {
		
		tab.setAttribute('aria-selected', 'false');
		tab.parentElement.classList.remove('is-active');
		panel.classList.remove('is-active');
	}

	/**
	 * Update classes and attributes for active tab & panel.
	 * 
	 * @param {any} tab 
	 * @param {any} panel 
	 */
	function activateTab(tab, panel) {

		tab.setAttribute('aria-selected', 'true');
		tab.parentElement.classList.add('is-active');
		panel.classList.add('is-active');
	}

	/**
	 * Fires events based on event target.
	 * 
	 * @param {any} event 
	 */
	function fireEvents(event) {
		
		if (event.target.tagName.toLowerCase() === 'a') {
			showTabContent(event.target);
		}
	}

	// Add event listener to tab component(s).
	for (var i = 0, len = tabs.length; i < len; i++) {
		tabs[i].addEventListener('click', fireEvents);
	}
})();

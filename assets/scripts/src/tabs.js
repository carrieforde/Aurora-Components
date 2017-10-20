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

	function keyboardNav(event) {

		var key          = event.keyCode,
			target       = event.target,
			listItem     = target.parentElement,
			tabComponent = listItem.parentElement.parentElement,
			newTarget;

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (listItem.previousElementSibling === null) {
					newTarget = tabComponent.querySelectorAll('.tabs__nav a');
					newTarget = newTarget[newTarget.length -1];
				} else {
					newTarget = listItem.previousElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				showTabContent(newTarget);
				break;

			// If down or right key is pressed.
			case 39: // left
			case 40: // down
				
				// Set the new target.
				if (listItem.nextElementSibling === null) {
					newTarget = tabComponent.querySelector('.tabs__nav a');
				} else {
					newTarget = listItem.nextElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				showTabContent(newTarget);
				break;
		
			default:
				break;
		}
	}

	// Add event listener to tab component(s).
	for (var i = 0, len = tabs.length; i < len; i++) {
		tabs[i].addEventListener('click', fireEvents);
		tabs[i].addEventListener('keyup', keyboardNav);
	}
})();

/**
 * Tabs Scripts
 */
( function() {

	// Set up global variables.
	var components = document.querySelectorAll( '.tabs' );

	/**
	 * Magically add accessiblity attributes. 🎩
	 *
	 */
	function addAccessibilityAttrs() {

		// Loop through tab components.
		for (var i = 0; i < components.length; i++) {

			var tabs    = components[i].querySelectorAll('.tabs__tab'),
				tabList = components[i].querySelector('.tabs__nav');

			// Add tablist attribute.
			tabList.setAttribute('role', 'tablist');

			for (var j = 0; j < tabs.length; j++) {
				var panelID  = tabs[j].getAttribute('href'),
					tabID    = tabs[j].getAttribute('id');
					controls = panelID.substring(1, panelID.length),
					panel    = components[i].querySelector(panelID);

				// Add tab attributes.
				tabs[j].setAttribute('role', 'tab');
				tabs[j].setAttribute('aria-controls', controls);
				tabs[j].setAttribute('aria-selected', 'false');
				tabs[j].setAttribute('tabindex', '-1');

				// Add panel attributes.
				panel.setAttribute('role', 'tabpanel');
				panel.setAttribute('aria-labelledby', tabID);
				panel.setAttribute('tabindex', '0');

				// If the tab & related panel are the first in the component, update the attributes.
				if (j === 0) {
					tabs[j].setAttribute('aria-selected', 'true');
					tabs[j].parentElement.classList.add('is-active');
					panel.classList.add('is-active');
				}
			}
		}
	}

	/**
	 * Show tab content based on selected tab.
	 *
	 * @param  {any}  event
	 */
	function showTabContent(el) {

		// Prevent default action of following link.
		event.preventDefault();

		// Set up function variables.
		var	component      = el.parentElement.parentElement.parentElement,
			tabID          = el.getAttribute('href'),
			currentTab     = component.querySelector( 'li.is-active a' ),
			currentContent = component.querySelector( '.tabs__panel.is-active' ),
			newContent;

		// Pass tabID to get new tab.
		newContent = component.querySelector( tabID );

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

	/**
	 * Enables keyboard navigation through tabbed interface.
	 *
	 * @param {any} event
	 */
	function keyboardNav(event) {

		var key          = event.keyCode,
			target       = event.target,
			listItem     = target.parentElement,
			component    = listItem.parentElement.parentElement,
			newTarget;

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (listItem.previousElementSibling === null) {
					newTarget = component.querySelectorAll('.tabs__nav a');
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
					newTarget = component.querySelector('.tabs__nav a');
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
	for (var i = 0; i < components.length; i++) {
		components[i].addEventListener('click', fireEvents);
		components[i].addEventListener('keyup', keyboardNav);
	}

	// Add event listner to window to add accessibilty attributes on load.
	window.addEventListener('load', addAccessibilityAttrs);
})();

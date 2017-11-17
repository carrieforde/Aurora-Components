/**
 * Tabs Scripts
 */
( function() {

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
			tabs           = component.querySelectorAll('a'),
			currentTab,
			currentContent,
			newContent;

		// Pass tabID to get new tab.
		newContent = component.querySelector( tabID );

		// Find the current tab & panel.
		for (var i = 0; i < tabs.length; i++) {

			if (tabs[i].getAttribute('aria-selected') === 'true') {
				currentTab = tabs[i];
				currentContent = component.querySelector(currentTab.getAttribute('href'));
			}
		}

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
		tab.classList.remove('text-primary');
		tab.parentElement.classList.remove('b-h-thin', 'b-mid-light-gray', 'b-t-thin', 'bg-white');
		tab.classList.add('text-mid-gray');
		panel.classList.add('none');
	}

	/**
	 * Update classes and attributes for active tab & panel.
	 *
	 * @param {any} tab
	 * @param {any} panel
	 */
	function activateTab(tab, panel) {

		tab.setAttribute('aria-selected', 'true');
		tab.classList.remove('text-mid-gray');
		tab.parentElement.classList.add('b-h-thin', 'b-mid-light-gray', 'b-t-thin', 'bg-white');
		tab.classList.add('text-primary');
		panel.classList.remove('none');
	}

	/**
	 * Enables keyboard navigation through tabbed interface.
	 *
	 * @param {any} event
	 */
	function handleKeyEvents(event) {

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
					newTarget = component.querySelectorAll('a');
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
					newTarget = component.querySelector('a');
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

	function handleClickEvents(event) {

		var target = event.target.closest('a') || event.target;

		// Bail if we don't have a target.
		if (!target) {
			return;
		}

		if (target.dataset.role === 'tab-toggle') {
			showTabContent(target);
		}
	}

	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', handleKeyEvents);
})();

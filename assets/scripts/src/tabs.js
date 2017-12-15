/**
 * Tabs Scripts
 */
(function() {

	'use strict';

	/**
	 * Magically add accessiblity attributes. 🎩
	 *
	 */
	function addAccessibilityAttrs () {

		var components = document.querySelectorAll('.tabs');

		components.forEach(component => {
			var tabs    = component.querySelectorAll('.tabs__tab'),
				tabList = component.querySelector('.tabs__nav'),
				activeTab,
				activePanel;

			tabList.setAttribute('role', 'tablist');

			tabs.forEach(tab => {
				var panelID  = tab.getAttribute('href'),
					tabID    = tab.getAttribute('id'),
					controls = panelID.substring(1, panelID.length),
					panel    = component.querySelector(panelID);

				// Add tab attributes.
				tab.setAttribute('role', 'tab');
				tab.setAttribute('aria-controls', controls);
				tab.setAttribute('aria-selected', 'false');
				tab.setAttribute('tabindex', '-1');

				// Add panel attributes.
				panel.setAttribute('role', 'tabpanel');
				panel.setAttribute('aria-labelledby', tabID);
				panel.setAttribute('tabindex', '0');
			});

			// Set active tab on load.
			activeTab = component.querySelector('.tabs__tab');
			activePanel = activeTab.getAttribute('href');
			activePanel = activePanel.substring(1, activePanel.length);
			activePanel = document.getElementById(activePanel);

			activeTab.setAttribute('aria-selected', 'true');
			activeTab.parentElement.classList.add('is-active');
			activePanel.classList.add('is-active');
		});
	}

	/**
	 * Show tab content based on selected tab.
	 *
	 * @param  {string}  el  The target element.
	 */
	function showTabContent (el) {

		// Set up function variables.
		var	component      = el.closest('.tabs'),
			tabID          = el.getAttribute('href'),
			currentTab     = component.querySelector('li.is-active a'),
			currentContent = component.querySelector('.tabs__panel.is-active'),
			newContent;

		// Pass tabID to get new tab.
		newContent = component.querySelector(tabID);

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
	function deactivateTab (tab, panel) {

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
	function activateTab (tab, panel) {

		tab.setAttribute('aria-selected', 'true');
		tab.parentElement.classList.add('is-active');
		panel.classList.add('is-active');
	}

	/**
	 * Handle tab click events.
	 *
	 * @param {object}  event  The event object.
	 */
	function handleClickEvents (event) {

		var target = event.target;

		if (target.classList.contains('tabs__tab')) {
			event.preventDefault();
			showTabContent(target);
		}
	}

	/**
	 * Enables keyboard navigation through tabbed interface.
	 *
	 * @param {any} event
	 */
	function handleKeyEvents (event) {

		var key          = event.keyCode,
			target       = event.target,
			listItem     = target.parentElement,
			component    = listItem.closest('.tabs'),
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
	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', handleKeyEvents);
	window.addEventListener('load', function() {
		setTimeout(() => {
			addAccessibilityAttrs();
		}, 500);
	});
})();

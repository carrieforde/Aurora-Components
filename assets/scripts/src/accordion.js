/**
 * Accordion scripts.
 */
(function() {

	/**
	 * Magically add accessibility attributes. 🎩
	 *
	 */
	function addAccessibilityAttrs () {

		var components = document.querySelectorAll('.accordion');

		// Loop through accordions.
		components.forEach(component => {

			var headings = component.querySelectorAll('.accordion__heading');

			// Add attribute to accordion.
			component.setAttribute('role', 'presentation');

			// Loop through headings.
			headings.forEach(heading => {
				var toggle    = heading.querySelector('.accordion__toggle'),
					headingID = heading.getAttribute('id'),
					panel     = heading.nextElementSibling,
					panelID   = panel.getAttribute('id'),
					listItem  = heading.parentElement;

				// Add attributes to toggles.
				toggle.setAttribute('aria-expanded', 'false');
				toggle.setAttribute('aria-controls', panelID);

				// Add attributes to panels.
				panel.setAttribute('aria-labelledby', headingID);

				// If the item is active, update the aria-expanded attribute.
				if (listItem.classList.contains('is-active')) {
					toggle.setAttribute('aria-expanded', 'true');
				}
			});
		});
	}

	/**
	 * Toggle the accordion content panel.
	 *
	 * @param {any} event
	 */
	function togglePanel (event) {

		// Prevent link follow.
		event.preventDefault();

		var target = event.target,
			parent = target.parentElement.parentElement;

		if (parent.classList.contains('is-active')) {
			deactivatePanel(target, parent);
		} else {
			activatePanel(target, parent);
		}
	}

	/**
	 * Deactivates a tab & panel.
	 *
	 * @param {string}  tab    The tab element.
	 * @param {string}  panel  The panel element.
	 */
	function deactivatePanel (tab, parent) {

		tab.setAttribute('aria-expanded', 'false');
		parent.classList.remove('is-active');
	}

	/**
	 * Activates a tab & panel.
	 *
	 * @param {string}  tab    The tab element.
	 * @param {string}  panel  The panel element.
	 */
	function activatePanel (tab, parent) {

		tab.setAttribute('aria-expanded', 'true');
		parent.classList.add('is-active');
	}

	/**
	 * Adds navigation through up / down / left / right arrow keys.
	 *
	 * @param  {object}   event  The event object.
	 * @return {boolean}         Returns false if parent isn't an accordion. 
	 */
	function handleKeyEvents (event) {

		var key       = event.keyCode,
			target    = event.target,
			parent    = target.parentElement.parentElement,
			accordion = target.closest('ul'),
			newTarget;

		// Return if we're not on an accordion.
		if (!accordion || !accordion.classList.contains('accordion')) {
			return false;
		}

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (parent.previousElementSibling === null) {
					newTarget = accordion.querySelectorAll('.accordion__toggle');
					newTarget = newTarget[newTarget.length - 1];
				} else {
					newTarget = parent.previousElementSibling;
					newTarget = newTarget.querySelector('.accordion__toggle');
				}

				newTarget.focus();
				break;

			// If down or right key is pressed.
			case 39:
			case 40:

				// Set the new target.
				if (parent.nextElementSibling === null) {
					newTarget = accordion.querySelector('.accordion__toggle');
				} else {
					newTarget = parent.nextElementSibling;
					newTarget = newTarget.querySelector('.accordion__toggle');
				}

				newTarget.focus();
				break;

			default:
				break;
		}
	}

	/**
	 * Determines whether to fire accordion events.
	 *
	 * @param {object}  event  The event object.
	 */
	function handleClickEvents (event) {

		var target = event.target;

		if (target.classList.contains('accordion__toggle')) {
			togglePanel(event);
		}
	}

	// Add event listeners.
	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', handleKeyEvents);
	window.addEventListener('load', function() {
		setTimeout(() => {
			addAccessibilityAttrs();
		}, 500);
	});
})();

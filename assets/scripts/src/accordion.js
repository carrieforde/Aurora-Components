/**
 * Accordion scripts.
 */
( function() {

	// Get global variables.
	var accordions = document.querySelectorAll('.accordion');

	/**
	 * Toggle the accordion content panel.
	 *
	 * @param {any} event
	 */
	function togglePanel(event) {

		// Bail if the event target isn't the button.
		if (!event.target.classList.contains('accordion__button')) {
			return;
		}

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
	function deactivatePanel(tab, parent) {

		tab.setAttribute('aria-expanded', 'false');
		parent.classList.remove('is-active');
	}

	/**
	 * Activates a tab & panel.
	 *
	 * @param {string}  tab    The tab element.
	 * @param {string}  panel  The panel element.
	 */
	function activatePanel(tab, parent) {

		tab.setAttribute('aria-expanded', 'true');
		parent.classList.add('is-active');
	}

	/**
	 * Adds navigation through up / down / left / right arrow keys.
	 *
	 * @param {any} event
	 */
	function keyboardNav(event) {

		var key = event.keyCode,
			target = event.target,
			parent = target.parentElement.parentElement,
			accordion = parent.parentElement,
			newTarget;

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (parent.previousElementSibling === null) {
					newTarget = accordion.querySelectorAll('.accordion__button');
					newTarget = newTarget[newTarget.length - 1];
				} else {
					newTarget = parent.previousElementSibling;
					newTarget = newTarget.querySelector('.accordion__button');
				}

				newTarget.focus();
				break;

			// If down or right key is pressed.
			case 39:
			case 40:

				// Set the new target.
				if (parent.nextElementSibling === null) {
					newTarget = accordion.querySelector('.accordion__button');
				} else {
					newTarget = parent.nextElementSibling;
					newTarget = newTarget.querySelector('.accordion__button');
				}

				newTarget.focus();
				break;

			default:
				break;
		}
	}

	// Add event listeners.
	for (var i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener('click', togglePanel);
		accordions[i].addEventListener('keyup', keyboardNav);
	}
})();

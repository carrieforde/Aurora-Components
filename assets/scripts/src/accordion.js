/**
 * Accordion scripts.
 */
( function() {

	/**
	 * Toggle the accordion content panel.
	 *
	 * @param {any} event
	 */
	function togglePanel(event) {

		// Prevent link follow.
		event.preventDefault();

		var target = event.target,
			panel  = target.parentElement.nextElementSibling;

		if (target.getAttribute('aria-expanded') === 'true') {
			deactivatePanel(target, panel);
		} else {
			activatePanel(target, panel);
		}
	}

	/**
	 * Deactivates a tab & panel.
	 *
	 * @param {string}  tab    The tab element.
	 * @param {string}  panel  The panel element.
	 */
	function deactivatePanel(tab, panel) {

		tab.setAttribute('aria-expanded', 'false');
		tab.classList.add('text-mid-gray');
		tab.classList.add('text-primary');
		panel.classList.remove('max-h-screen');
		panel.classList.add('max-h-0');
	}

	/**
	 * Activates a tab & panel.
	 *
	 * @param {string}  tab    The tab element.
	 * @param {string}  panel  The panel element.
	 */
	function activatePanel(tab, panel) {

		tab.setAttribute('aria-expanded', 'true');
		tab.classList.add('text-primary');
		tab.classList.remove('text-mid-gray');
		panel.classList.add('max-h-screen');
		panel.classList.remove('max-h-0');
	}

	/**
	 * Adds navigation through up / down / left / right arrow keys.
	 *
	 * @param {any} event
	 */
	function keyboardNav(event) {

		var key       = event.keyCode,
			target    = event.target,
			parent    = target.parentElement.parentElement,
			accordion = parent.parentElement,
			newTarget;

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (parent.previousElementSibling === null) {
					newTarget = accordion.querySelectorAll('a');
					newTarget = newTarget[newTarget.length - 1];
				} else {
					newTarget = parent.previousElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				break;

			// If down or right key is pressed.
			case 39:
			case 40:

				// Set the new target.
				if (parent.nextElementSibling === null) {
					newTarget = accordion.querySelector('a');
				} else {
					newTarget = parent.nextElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				break;

			default:
				break;
		}
	}

	/**
	 * Determines which function to fire on click.
	 * 
	 * @param {any} event 
	 * @returns 
	 */
	function handleClickEvents(event) {

		var target = event.target.closest('a') || event.target;

		if (!target) {
			return;
		}

		if (target.dataset.role === 'accordion-toggle') {
			togglePanel(event);
		}
	}

	/**
	 * Determines which function to fire on keyup.
	 * 
	 * @param {any} event 
	 * @returns 
	 */
	function handleKeyEvents(event) {

		var target = event.target.closest('ul');

		if (!target) {
			return;
		}

		if (target.classList.contains('accordion')) {
			keyboardNav(event);
		}
	}

	// Add event listeners.
	document.addEventListener('click', handleClickEvents);
	document.addEventListener('keyup', handleKeyEvents);
})();

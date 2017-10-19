/**
 * Accordion scripts.
 */
( function( window ) {

	// Get global variables.
	var accordions = document.querySelectorAll('.accordion');

	/**
	 * Toggle the accordion content panel.
	 * 
	 * @param {any} event 
	 */
	var togglePanel = function (event) {

		var target = event.target,
			panel  = target.nextElementSibling,	
			parent = target.parentElement;

		if (parent.classList.contains('is-active')) {
			deactivatePanel(target, panel);
		} else {
			activatePanel(target, panel);
		}
	};

	/**
	 * Deactivates a tab & panel.
	 * 
	 * @param {string}  tab    The tab element.
	 * @param {string}  panel  The panel element.
	 */
	var deactivatePanel = function (tab, panel) {

		tab.parentElement.classList.remove('is-active');
		tab.setAttribute('aria-selected', 'false');
		panel.removeAttribute('aria-expanded');
		panel.setAttribute('aria-hidden', 'true');
	};

	/**
	 * Activates a tab & panel.
	 * 
	 * @param {string}  tab    The tab element.
	 * @param {string}  panel  The panel element.
	 */
	var activatePanel = function (tab, panel) {
		
		tab.parentElement.classList.add('is-active');
		tab.setAttribute('aria-selected', 'true');
		panel.removeAttribute('aria-hidden');
		panel.setAttribute('aria-expanded', 'true');
	};

	// Add event listeners.
	for (var i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener('click', togglePanel);
	}
})( window );

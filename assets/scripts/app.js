/*! bov-web-components JS - This file is built with Grunt. DO NOT EDIT! */

/**
 * Accordion scripts.
 */
(function (window) {

	// Get global variables.
	var accordions = document.querySelectorAll('.accordion');

	/**
  * Toggle the accordion content panel.
  * 
  * @param {any} event 
  */
	var togglePanel = function (event) {

		var target = event.target,
		    panel = target.nextElementSibling,
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
})(window);

/**
 * Carousel
 */
(function (window) {

	// Get global variables.
	var thumbs = document.querySelectorAll('.carousel__nav li');

	/**
  * Change slides when thumbnail is clicked.
  * 
  */
	var changeSlide = function () {

		var slides = document.querySelectorAll('.carousel__slide'),
		    activeSlide,
		    newSlide;

		// Cycle through slides...
		for (var i = 0; i < slides.length; i++) {

			// Figure out which slide is currently active.
			if (slides[i].classList.contains('is-active')) {
				activeSlide = slides[i];
			}

			// Figure our which slide needs to be active.
			if (slides[i].dataset.slide === this.dataset.thumb) {
				newSlide = slides[i];
			}
		}

		// Update classes.
		activeSlide.classList.remove('is-active');
		newSlide.classList.add('is-active');
	};

	// Add event listeners to thumbails.
	for (var i = 0; i < thumbs.length; i++) {
		thumbs[i].addEventListener('click', changeSlide);
	}
})(window);

/**
 * Tabs Scripts
 */
(function (window) {

	// Set up global variables.
	var tabs = document.querySelectorAll('.tabs');

	/**
  * Show tab content based on selected tab.
  * 
  * @param  {any}  event 
  */
	var showTabContent = function (el) {

		// Prevent default action of following link.
		event.preventDefault();

		// Set up function variables.
		var tabComponent = el.parentElement.parentElement.parentElement,
		    tabID = el.getAttribute('href'),
		    activeTab = tabComponent.querySelector('li.is-active'),
		    activeContent = tabComponent.querySelector('.tabs__content.is-active'),
		    newContent;

		// Strip # from href.
		tabID = tabID.substring(1, tabID.length);

		// Pass tabID to get new tab.
		newContent = document.getElementById(tabID);

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
	};

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
	};

	/**
  * Fires events based on event target.
  * 
  * @param {any} event 
  */
	var fireEvents = function (event) {

		if (event.target.tagName.toLowerCase() === 'a') {
			showTabContent(event.target);
		}
	};

	// Add event listener to tab component(s).
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', fireEvents);
	}
})(window);

//# sourceMappingURL=app.js.map

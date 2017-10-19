/*! bov-web-components JS - This file is built with Grunt. DO NOT EDIT! */

/**
 * Add smooth scrolling for on-page navigation.
 */
(function () {

	// Script options.
	var options = {
		menuSelector: '.nav-menu .menu',
		mobileBreakPoint: 900,
		headerHeight: 0,
		timeout: 500 // in milleseconds
	},
	    menu = document.querySelector(options.menuSelector);

	/**
  * Do smooth scrolling.
  *
  * {@link  https://css-tricks.com/snippets/jquery/smooth-scrolling/}
  * {@link  https://css-tricks.com/smooth-scrolling-accessibility/}
  * @param  {any}  event 
  */
	function smoothScroll(event) {

		event.preventDefault();

		var el = event.target,
		    hash = el.getAttribute('href'),
		    url = window.location.pathname,
		    target = document.querySelector(hash),
		    offset = target.offsetTop;

		// Check window width, and update offset accordingly.
		if (window.innerWidth > options.mobileBreakPoint - 1) {
			offset = offset - options.headerHeight;
		}

		// Scroll the the desired element.
		window.scroll({ left: 0, top: offset, behavior: 'smooth' });

		// Update focus after scolling is complete.
		setTimeout(function () {

			// Updates focus to our target element.
			target.setAttribute('tabindex', '-1');
			target.focus();
			window.location.href = url + hash;
			window.scroll(0, offset); // prevents jumpbacks from applying focus.
		}, options.timeout);
	}

	menu.addEventListener('click', smoothScroll);
})();

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
 * Menu JS
 */
(function () {

	var navMenu = document.querySelector('.nav-menu');

	/**
  * Adds helper classes on page load.
  * 
  */
	var addClasses = function () {

		var menuItems = navMenu.querySelectorAll('li');

		for (var i = 0, len = menuItems.length; i < len; i++) {

			if (menuItems[i].lastElementChild.classList.contains('menu__sub-menu')) {
				menuItems[i].classList.add('has-children');
			}

			// If sub-menu will open offscreen, add a class so it doesn't.
			if (window.outerWidth - menuItems[i].offsetLeft < 175) {
				menuItems[i].classList.add('reverse-open');
			}
		}
	};

	/**
  * Visibly opens submenus on tabpress.
  * 
  * @param {any} event
  */
	var tabNavigation = function (event) {

		var el = event.target,
		    subMenu = el.nextElementSibling,
		    lastItem,
		    toggled = document.querySelector('.is-toggled');

		// console.log(event.keyCode);

		// Show submenu once parent has been selected.
		if (subMenu && subMenu.classList.contains('menu__sub-menu')) {
			toggled = el.parentElement;
			toggled.classList.add('is-toggled');
		}

		// If we're in a sub-menu, toggle it closed once we've tabbed away from the last menu item.
		if (subMenu) {
			lastItem = subMenu.querySelectorAll('li');
			lastItem = lastItem[lastItem.length - 1].firstElementChild;

			lastItem.onblur = function () {
				toggled.classList.remove('is-toggled');
			};
		}

		// If we Shift + Tab back to the last item of a sub-menu, open the sub-menu.
		if (!subMenu && el.parentElement.parentElement.classList.contains('menu__sub-menu')) {
			subMenu = el.parentElement.parentElement;
			toggled = subMenu.parentElement;
			toggled.classList.add('is-toggled');
		}

		// If we Shift + Tab away from the parent with a sub-menu, close the sub-menu.
		if (!subMenu && toggled) {
			toggled.classList.remove('is-toggled');
		}

		// Close a toggled submenu when esc is pressed.
		if (toggled && event.keyCode === 27) {
			toggled.classList.remove('is-toggled');
		}

		// If the submenu is toggled, and we click on the body of the page, let's close the menu.
		if (toggled) {
			document.querySelector('body').onclick = function () {
				toggled.classList.remove('is-toggled');
			};
		}
	};

	window.addEventListener('load', addClasses);
	navMenu.addEventListener('keyup', tabNavigation);
})();

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

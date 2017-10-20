/*! bov-web-components JS - This file is built with Grunt. DO NOT EDIT! */

/**
 * Accordion scripts.
 */
(function () {

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

/**
 * Carousel
 */
(function () {

	var carousels = document.querySelectorAll('.carousel');

	function changeSlides(el) {

		var carousel = el.parentElement.parentElement,
		    currentDot = carousel.querySelector('.carousel__dots .is-active'),
		    currentSlide = carousel.querySelector('.carousel__slide.is-active'),
		    target = el.getAttribute('href'),
		    newSlide = carousel.querySelector(target);

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		el.classList.add('is-active');
		newSlide.classList.add('is-active');
	}

	function advanceSlides(el) {

		var carousel = el.parentElement.parentElement,
		    currentDot = carousel.querySelector('.carousel__dots .is-active'),
		    nextDot = currentDot.nextElementSibling,
		    currentSlide = carousel.querySelector('.carousel__slide.is-active'),
		    nextSlide = currentSlide.nextElementSibling;

		// If we're on the last slide, let's go back to the beginning.
		if (nextDot === null) {
			nextDot = carousel.querySelector('.carousel__dots a');
			nextSlide = carousel.querySelector('.carousel__slide');
		}

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		nextDot.classList.add('is-active');
		nextSlide.classList.add('is-active');
	}

	function reverseSlides(el) {
		var carousel = el.parentElement.parentElement,
		    currentDot = carousel.querySelector('.carousel__dots .is-active'),
		    prevDot = currentDot.previousElementSibling,
		    currentSlide = carousel.querySelector('.carousel__slide.is-active'),
		    prevSlide = currentSlide.previousElementSibling;

		// If we're on the first slide, let's go to the end.
		if (prevDot === null) {
			prevDot = carousel.querySelectorAll('.carousel__dots a');
			prevDot = prevDot[prevDot.length - 1];
			prevSlide = carousel.querySelectorAll('.carousel__slide');
			prevSlide = prevSlide[prevSlide.length - 1];
		}

		// Update classes.
		currentDot.classList.remove('is-active');
		currentSlide.classList.remove('is-active');
		prevDot.classList.add('is-active');
		prevSlide.classList.add('is-active');
	}

	function fireClickEvents(event) {

		var el = event.target;

		if (el.classList.contains('carousel__button--next') || el.classList.contains('fa-chevron-right')) {

			if (el.classList.contains('fa-chevron-right')) {
				el = el.parentElement;
			}

			advanceSlides(el);
		}

		if (el.classList.contains('carousel__button--previous') || el.classList.contains('fa-chevron-left')) {

			if (el.classList.contains("fa-chevron-left")) {
				el = el.parentElement;
			}

			reverseSlides(el);
		}

		if (el.tagName.toLowerCase() === 'a') {
			event.preventDefault();

			changeSlides(el);
		}
	}

	for (var i = 0, len = carousels.length; i < len; i++) {
		carousels[i].addEventListener('click', fireClickEvents);
	}
})();

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
 * Add smooth scrolling for on-page navigation.
 */
(function () {

	// Script options.
	var options = {
		menuSelector: '.nav-menu .menu',
		mobileBreakPoint: 900,
		headerHeight: 20,
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

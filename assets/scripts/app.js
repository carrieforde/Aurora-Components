/*! bov-web-components JS - This file is built with Grunt. DO NOT EDIT! */

/**
 * Accordion scripts.
 */
(function () {

	// Get global variables.
	var components = document.querySelectorAll('.accordion');

	/**
  * Magically add accessibility attributes. 🎩
  * 
  */
	function addAccessibilityAttrs() {

		// Loop through accordion components.
		for (var i = 0; i < components.length; i++) {

			var headings = components[i].querySelectorAll('.accordion__heading');

			// Add attribute to accordion.
			components[i].setAttribute('role', 'presentation');

			for (var j = 0; j < headings.length; j++) {
				var toggle = headings[j].querySelector('.accordion__toggle'),
				    headingID = headings[j].getAttribute('id'),
				    panel = headings[j].nextElementSibling,
				    panelID = panel.getAttribute('id'),
				    listItem = headings[j].parentElement;

				// Add attributes to toggles.
				toggle.setAttribute('aria-expanded', 'false');
				toggle.setAttribute('aria-controls', panelID);

				// Add attributes to panels.
				panel.setAttribute('aria-labelledby', headingID);

				// If the item is active, update the aria-expanded attribute.
				if (listItem.classList.contains('is-active')) {
					toggle.setAttribute('aria-expanded', 'true');
				}
			}
		}
	}

	/**
  * Toggle the accordion content panel.
  *
  * @param {any} event
  */
	function togglePanel(event) {

		// Bail if the event target isn't the toggle.
		if (!event.target.classList.contains('accordion__toggle')) {
			return;
		}

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

	// Add event listeners.
	for (var i = 0; i < components.length; i++) {
		components[i].addEventListener('click', togglePanel);
		components[i].addEventListener('keyup', keyboardNav);
	}

	window.addEventListener('load', addAccessibilityAttrs);
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

	var components = document.querySelectorAll('.menu');

	/**
  * Adds helper classes on page load.
  * 
  */
	function addClasses() {

		for (var i = 0; i < components.length; i++) {

			var menuItems = components[i].querySelectorAll('li');

			for (var j = 0; j < menuItems.length; j++) {

				if (menuItems[j].lastElementChild.classList.contains('menu__sub-menu')) {
					menuItems[j].classList.add('has-children');
				}

				// If sub-menu will open offscreen, add a class so it doesn't.
				if (window.innerWidth - menuItems[j].offsetLeft < 175) {
					menuItems[j].classList.add('reverse-open');
				}
			}
		}
	}

	/**
  * Adds toggle buttons for sub-menus.
  * 
  */
	function addHelpers() {

		for (var i = 0; i < components.length; i++) {

			var menuItems = components[i].querySelectorAll('li'),
			    toggles;

			for (var j = 0; j < menuItems.length; j++) {

				var toggle = document.createElement('button'),
				    textWrap = document.createElement('span'),
				    toggleText = document.createTextNode('Toggle');

				if (menuItems[j].lastElementChild.classList.contains('menu__sub-menu')) {
					textWrap.appendChild(toggleText);
					textWrap.classList.add('screen-reader-text');
					toggle.appendChild(textWrap);
					toggle.classList.add('button', 'button--sub-menu');
					menuItems[j].appendChild(toggle);
				}
			}
		}
	}

	/**
  * Visibly opens submenus on tabpress.
  * 
  * @param {any} event
  */
	function tabNavigation(event) {

		var el = event.target,
		    subMenu = el.nextElementSibling ? el.nextElementSibling : '',
		    lastItem,
		    toggled = document.querySelector('.is-toggled');

		// Show submenu once parent has been selected, but close it once we tab away from the last item.
		if (subMenu) {
			toggled = el.parentElement;
			toggled.classList.add('is-toggled');

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
	}

	/**
  * Adds functionality to toggle sub-menu on button press.
  * 
  * @param {any} event 
  * @returns 
  */
	function toggleSubMenu(event) {

		var el = event.target,
		    parent = el.parentElement;

		// Bail if we're not looking at a sub-menu toggle.
		if (!el.classList.contains('button--sub-menu')) {
			return;
		}

		// Add or remove class on list item.
		if (parent.classList.contains('is-toggled')) {
			parent.classList.remove('is-toggled');
		} else {
			parent.classList.add('is-toggled');
		}
	}

	// Add event listeners on menus.
	for (var i = 0; i < components.length; i++) {
		components[i].addEventListener('keyup', tabNavigation);
		components[i].addEventListener('click', toggleSubMenu);
	}

	// Add event listners on window.
	window.addEventListener('load', addClasses);
	window.addEventListener('load', addHelpers);
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

		// Return if a link isn't clicked.
		if (event.target.tagName.toLowerCase() !== 'a') {
			return;
		}

		// Prevent follow action.
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
(function () {

	// Set up global variables.
	var components = document.querySelectorAll('.tabs');

	/**
  * Magically add accessiblity attributes. 🎩
  *
  */
	function addAccessibilityAttrs() {

		// Loop through tab components.
		for (var i = 0; i < components.length; i++) {

			var tabs = components[i].querySelectorAll('.tabs__tab'),
			    tabList = components[i].querySelector('.tabs__nav');

			// Add tablist attribute.
			tabList.setAttribute('role', 'tablist');

			for (var j = 0; j < tabs.length; j++) {
				var panelID = tabs[j].getAttribute('href'),
				    tabID = tabs[j].getAttribute('id');
				controls = panelID.substring(1, panelID.length), panel = components[i].querySelector(panelID);

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
		var component = el.parentElement.parentElement.parentElement,
		    tabID = el.getAttribute('href'),
		    currentTab = component.querySelector('li.is-active a'),
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

		var key = event.keyCode,
		    target = event.target,
		    listItem = target.parentElement,
		    component = listItem.parentElement.parentElement,
		    newTarget;

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (listItem.previousElementSibling === null) {
					newTarget = component.querySelectorAll('.tabs__nav a');
					newTarget = newTarget[newTarget.length - 1];
				} else {
					newTarget = listItem.previousElementSibling;
					newTarget = newTarget.querySelector('a');
				}

				newTarget.focus();
				showTabContent(newTarget);
				break;

			// If down or right key is pressed.
			case 39: // left
			case 40:
				// down

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

//# sourceMappingURL=app.js.map

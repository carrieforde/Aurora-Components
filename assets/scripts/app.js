/*! bov-web-components JS - This file is built with Grunt. DO NOT EDIT! */

/**
 * Accordion scripts.
 */
(function () {

	/**
  * Toggle the accordion content panel.
  *
  * @param {any} event
  */
	function togglePanel(event) {

		// Prevent link follow.
		event.preventDefault();

		var target = event.target,
		    panel = target.parentElement.nextElementSibling;

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
 * Fixed Sidebar
 */
(function () {

	// Script options.
	var options = {
		sidebarSelector: '.sidebar',
		fixPosition: 20
	},
	    sidebar = document.querySelector(options.sidebarSelector);

	/**
  * Fixes the sidebar within the viewport.
  * 
  */
	function fixSidebar() {

		if (sidebar.offsetTop - window.scrollY < options.fixPosition) {
			sidebar.classList.add('is-fixed');
		} else {
			sidebar.classList.remove('is-fixed');
		}
	}

	window.addEventListener('scroll', fixSidebar);
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
					toggle.classList.add('button', 'button--plus-minus', 'absolute', 'pos-r');
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
		    subMenu = el.previousElementSibling;

		// Bail if we're not looking at a sub-menu toggle.
		if (!el.classList.contains('button--plus-minus')) {
			return;
		}

		// Add or remove class on list item.
		if (subMenu.classList.contains('max-h-0')) {
			subMenu.classList.remove('max-h-0');
			subMenu.classList.add('max-h-screen');
		} else {
			subMenu.classList.remove('max-h-screen');
			subMenu.classList.add('max-h-0');
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

// /**
//  * Modal Scripts
//  */
// (function() {

// 	var components = document.querySelectorAll('.modal'),
// 		container = document.querySelector('.modal-container'),
// 		openedModal;

// 	/**
// 	 * Open the modal a modal.
// 	 * 
// 	 * @param {string}  instance  The modal to open.
// 	 */
// 	window.openModal = function(instance) {

// 		var modal    = document.querySelector('#' + instance),
// 			wrapper  = modal.parentElement,
// 			body     = document.querySelector('body');

// 		openedModal = modal;

// 		modal.classList.remove('is-hidden');
// 		wrapper.classList.remove('is-hidden');
// 		body.classList.add('modal-open');
// 	};

// 	/**
// 	 * Close currently open modal.
// 	 * 
// 	 * @param {string}  instance  The modal to close.
// 	 */
// 	function closeModal(instance) {

// 		var body = document.querySelector('body');

// 		body.classList.remove('modal-open');
// 		instance.classList.add('is-hidden');
// 		instance.parentElement.classList.add('is-hidden');

// 		setTimeout(function() {
// 			openedModal = '';
// 		}, 200);
// 	}

// 	/**
// 	 * Handles click events.
// 	 * 
// 	 * @param {any} event 
// 	 */
// 	function handleClickEvents(event) {

// 		var el = event.target;

// 		if ( el.classList.contains('button--close') || el.classList.contains('modal-container')) {
// 			closeModal(openedModal);
// 		}
// 	}

// 	/**
// 	 * Closes modal when ESC is presssed.
// 	 * 
// 	 * @param {any} event 
// 	 */
// 	function keyClose(event) {

// 		var key = event.keyCode;

// 		if (key === 27 && openedModal) {
// 			closeModal(openedModal);
// 		}
// 	}

// 	// Add event listeners to each instance of a modal.
// 	for (var i = 0; i < components.length; i++) {
// 		components[i].addEventListener('click', handleClickEvents);
// 	}

// 	container.addEventListener('click', handleClickEvents);
// 	document.addEventListener('keyup', keyClose);
// })();


// /**
//  * Add smooth scrolling for on-page navigation.
//  */
// (function() {

// 	// Script options.
// 	var options = {
// 		menuSelector: '.nav-menu .menu',
// 		mobileBreakPoint : 900,
// 		headerHeight: 20,
// 		timeout: 500 // in milleseconds
// 	},
// 		menu = document.querySelector( options.menuSelector );

// 	/**
// 	 * Do smooth scrolling.
// 	 *
// 	 * {@link  https://css-tricks.com/snippets/jquery/smooth-scrolling/}
// 	 * {@link  https://css-tricks.com/smooth-scrolling-accessibility/}
// 	 * @param  {any}  event 
// 	 */
// 	function smoothScroll( event ) {

// 		// Return if a link isn't clicked.
// 		if (event.target.tagName.toLowerCase() !== 'a') {
// 			return;
// 		}

// 		// Prevent follow action.
// 		event.preventDefault();

// 		var el     = event.target,
// 			hash   = el.getAttribute('href'),
// 			url    = window.location.pathname,
// 			target = document.querySelector(hash),
// 			offset = target.offsetTop;

// 		// Check window width, and update offset accordingly.
// 		if (window.innerWidth > options.mobileBreakPoint - 1) {
// 			offset = offset - options.headerHeight;
// 		}

// 		// Scroll the the desired element.
// 		window.scroll({left: 0, top: offset, behavior: 'smooth'});

// 		// Update focus after scolling is complete.
// 		setTimeout(function () {

// 			// Updates focus to our target element.
// 			target.setAttribute('tabindex', '-1');
// 			target.focus();
// 			window.location.href = url + hash;
// 			window.scroll(0, offset); // prevents jumpbacks from applying focus.
// 		}, options.timeout);
// 	}

// 	menu.addEventListener('click', smoothScroll);
// })();


/**
 * Tabs Scripts
 */
(function () {

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
		    tabs = component.querySelectorAll('a'),
		    currentTab,
		    currentContent,
		    newContent;

		// Pass tabID to get new tab.
		newContent = component.querySelector(tabID);

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

		var key = event.keyCode,
		    target = event.target,
		    listItem = target.parentElement,
		    component = listItem.parentElement.parentElement,
		    newTarget;

		if (!target.closest('div').classList.contains('tabs')) {
			return;
		}

		switch (key) {

			// If up or left key is pressed.
			case 37:
			case 38:

				// Set the new target.
				if (listItem.previousElementSibling === null) {
					newTarget = component.querySelectorAll('a');
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

/**
 * Tooltip scripts.
 */
(function () {

	var tooltips = document.querySelectorAll('.has-tooltip');

	window.addEventListener('load', function () {
		for (var i = 0; i < tooltips.length; i++) {
			var tooltip = tooltips[i].dataset.tooltip,
			    tooltipBox = document.createElement('span');

			console.log('boo');

			tooltipBox.textContent = tooltip;
			tooltipBox.classList.add('tooltip', 'is-hidden');
			tooltips[i].appendChild(tooltipBox);

			tooltips[i].onmouseenter = function () {
				tooltipBox.classList.toggle('is-hidden');
			};

			tooltips[i].onmouseleave = function () {
				tooltipBox.classList.toggle('is-hidden');
			};
		}
	});
})();

//# sourceMappingURL=app.js.map

// /**
//  * Menu JS
//  */
// (function () {
	
// 	var components = document.querySelectorAll('.menu');

// 	/**
// 	 * Adds helper classes on page load.
// 	 * 
// 	 */
// 	function addClasses() {

// 		for (var i = 0; i < components.length; i++) {

// 			var menuItems = components[i].querySelectorAll('li');

// 			for (var j = 0; j < menuItems.length; j++) {

// 				if (menuItems[j].lastElementChild.classList.contains('menu__sub-menu')) {
// 					menuItems[j].classList.add('has-children');
// 				}
				
// 				// If sub-menu will open offscreen, add a class so it doesn't.
// 				if ((window.innerWidth - menuItems[j].offsetLeft) < 175) {
// 					menuItems[j].classList.add('reverse-open');
// 				}
// 			}
// 		}
// 	}

// 	/**
// 	 * Adds toggle buttons for sub-menus.
// 	 * 
// 	 */
// 	function addHelpers() {

// 		for (var i = 0; i < components.length; i++) {

// 			var menuItems = components[i].querySelectorAll('li'),
// 				toggles;

// 			for (var j = 0; j < menuItems.length; j++) {

// 				var toggle = document.createElement('button'),
// 					textWrap = document.createElement('span'),
// 					toggleText = document.createTextNode('Toggle');

// 				if (menuItems[j].lastElementChild.classList.contains('menu__sub-menu')) {
// 					textWrap.appendChild(toggleText);
// 					textWrap.classList.add('screen-reader-text');
// 					toggle.appendChild(textWrap);
// 					toggle.classList.add('button', 'button--plus-minus');
// 					menuItems[j].appendChild(toggle);
// 				}
// 			}
// 		}
// 	}

// 	/**
// 	 * Visibly opens submenus on tabpress.
// 	 * 
// 	 * @param {any} event
// 	 */
// 	function tabNavigation(event) {

// 		var el      = event.target,
// 			subMenu = el.nextElementSibling ? el.nextElementSibling : '',
// 			lastItem,
// 			toggled = document.querySelector('.is-toggled');

// 		// Show submenu once parent has been selected, but close it once we tab away from the last item.
// 		if (subMenu) {
// 			toggled = el.parentElement;
// 			toggled.classList.add('is-toggled');

// 			lastItem = subMenu.querySelectorAll('li');
// 			lastItem = lastItem[lastItem.length - 1].firstElementChild;

// 			lastItem.onblur = function () {
// 				toggled.classList.remove('is-toggled');
// 			}
// 		}

// 		// If we Shift + Tab back to the last item of a sub-menu, open the sub-menu.
// 		if (!subMenu && el.parentElement.parentElement.classList.contains('menu__sub-menu')) {
// 			subMenu = el.parentElement.parentElement;
// 			toggled = subMenu.parentElement;
// 			toggled.classList.add('is-toggled');
// 		}

// 		// If we Shift + Tab away from the parent with a sub-menu, close the sub-menu.
// 		if (!subMenu && toggled) {
// 			toggled.classList.remove('is-toggled');
// 		}

// 		// Close a toggled submenu when esc is pressed.
// 		if (toggled && event.keyCode === 27){
// 			toggled.classList.remove('is-toggled');
// 		}

// 		// If the submenu is toggled, and we click on the body of the page, let's close the menu.
// 		if (toggled) {
// 			document.querySelector('body').onclick = function () {
// 				toggled.classList.remove('is-toggled');
// 			}
// 		}
// 	}

// 	/**
// 	 * Adds functionality to toggle sub-menu on button press.
// 	 * 
// 	 * @param {any} event 
// 	 * @returns 
// 	 */
// 	function toggleSubMenu(event) {

// 		var el     = event.target,
// 			parent = el.parentElement;

// 		// Bail if we're not looking at a sub-menu toggle.
// 		if (!el.classList.contains('button--plus-minus')) {
// 			return;
// 		}

// 		// Add or remove class on list item.
// 		if (parent.classList.contains('is-toggled')) {
// 			parent.classList.remove('is-toggled');
// 		} else {
// 			parent.classList.add('is-toggled');
// 		}
// 	}

// 	// Add event listeners on menus.
// 	for (var i = 0; i < components.length; i++) {
// 		components[i].addEventListener('keyup', tabNavigation);
// 		components[i].addEventListener('click', toggleSubMenu);
// 	}

// 	// Add event listners on window.
// 	window.addEventListener('load', addClasses);
// 	window.addEventListener('load', addHelpers);
// })();

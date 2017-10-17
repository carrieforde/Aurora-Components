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
			if ((window.outerWidth - menuItems[i].offsetLeft) < 175) {
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

		var el      = event.target,
			subMenu = el.nextElementSibling,
			lastItem,
			toggled = document.querySelector('.is-toggled');

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
			}
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
	};

	window.addEventListener('load', addClasses);
	navMenu.addEventListener('keyup', tabNavigation);
})();

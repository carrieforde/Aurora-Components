/**
 * Nav menu JS
 */
(function (window) {
	
	var navMenu = document.querySelector('.nav-menu');

	/**
	 * Visibly opens submenus on tabpress.
	 * 
	 * @param {any} event
	 */
	var keyboardNav = function (event) {

		var el      = event.target,
			subMenu = el.nextElementSibling,
			lastItem;

		// Show submenu once parent has been selected.
		if (subMenu && subMenu.classList.contains('menu__sub-menu')) {
			el.parentElement.classList.add('is-toggled');
		}

		// If we're in a submenu, toggle it closed once we've tabbed away from the last menu item.
		if (subMenu) {
			lastItem = subMenu.querySelectorAll('li');
			lastItem = lastItem[lastItem.length - 1].firstElementChild;

			lastItem.onblur = function () {
				el.parentElement.classList.remove('is-toggled');
			}
		}
	};

	navMenu.addEventListener('keyup', keyboardNav);
})(window);

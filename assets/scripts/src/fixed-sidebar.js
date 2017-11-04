/**
 * Fixed Sidebar
 */
(function(){

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

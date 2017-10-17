/**
 * Add smooth scrolling for on-page navigation.
 */
(function() {
	
	// Script options.
	var options = {
		menuSelector: '.nav-menu .menu',
		mobileBreakPoint : 900,
		headerHeight: 0,
		timeout: 500 // in milleseconds
	},
		menu = document.querySelector( options.menuSelector );

	/**
	 * Do smooth scrolling.
	 *
	 * {@link  https://css-tricks.com/snippets/jquery/smooth-scrolling/}
	 * {@link  https://css-tricks.com/smooth-scrolling-accessibility/}
	 * @param  {any}  event 
	 */
	function smoothScroll( event ) {

		event.preventDefault();
			
		var el     = event.target,
			hash   = el.getAttribute('href'),
			url    = window.location.pathname,
			target = document.querySelector(hash),
			offset = target.offsetTop;

		// Check window width, and update offset accordingly.
		if (window.innerWidth > options.mobileBreakPoint - 1) {
			offset = offset - options.headerHeight;
		}

		// Scroll the the desired element.
		window.scroll({left: 0, top: offset, behavior: 'smooth'});

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

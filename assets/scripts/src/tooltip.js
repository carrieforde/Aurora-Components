/**
 * Tooltip scripts.
 */
(function () {
	
	var tooltips = document.querySelectorAll('.has-tooltip');

	window.addEventListener('load', function() {
		for (var i = 0; i < tooltips.length; i++) {
			var tooltip = tooltips[i].dataset.tooltip,
				tooltipBox = document.createElement('span');
			
			console.log('boo');

			tooltipBox.textContent = tooltip;
			tooltipBox.classList.add('tooltip', 'is-hidden');
			tooltips[i].appendChild(tooltipBox);

			tooltips[i].onmouseenter = function() {
				tooltipBox.classList.toggle('is-hidden');
			};

			tooltips[i].onmouseleave = function() {
				tooltipBox.classList.toggle('is-hidden');
			};
		}
	});
})();

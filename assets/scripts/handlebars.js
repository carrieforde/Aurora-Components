/**
 * Handles Handlebars functionality.
 */
(function (Handlebars) {

	var page = document.getElementById('page');
	
	/**
	 * Request the data.
	 * 
	 * @param  {string}  dataURL  The URL to the data.
	 */
	function requestData (dataURL) {
		var xhr = new XMLHttpRequest(),
			contentTemplate,
			data;

		xhr.onload = function() {

			if (xhr.status === 200) {
				data = JSON.parse(xhr.responseText);

				contentTemplate = Handlebars.templates.accordion(data);

				page.innerHTML += '<main class="page__content">' + contentTemplate + "</main>";
			}
		};

		xhr.open('GET', dataURL);
		xhr.send();
	}

	requestData('components.json');
})(Handlebars);

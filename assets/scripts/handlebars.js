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
				contentTemplate += Handlebars.templates.carousel(data);

				page.innerHTML += '<main class="page__content">' + contentTemplate + "</main>";
				Prism.highlightAll();
			}
		};

		xhr.open('GET', dataURL);
		xhr.send();
	}

	Handlebars.registerHelper('position', function (num, index, options) {

		if (!options.hash.operator) {
			if (num === index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '==') {
			if (num == index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '!=') {
			if (num != index + 1) {
				return options.fn(this);
			}
		}

		if (options.has.operator === '!==') {
			if (num !== index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<') {
			if (num < index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<=') {
			if (num <= index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>') {
			if (num > index + 1) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>=') {
			if (num >= index + 1) {
				return options.fn(this);
			}
		}

		return options.inverse(this);
	});

	Handlebars.registerHelper('componentCode', function() {

		var output = '';

		if (this.code.template) {
			output += '<pre class="language-handlebars"><code>' + this.code.template + '</code></pre>';
		}

		if (this.code.sass) {
			output += '<pre class="language-scss"><code>' + this.code.sass + '</code></pre>';
		}

		if (this.code.javascript) {
			output += '<pre class="language-javascript"><code>' + this.code.javascript + '</code></pre>';
		}

		return output;
	});

	requestData('components.json');
})(Handlebars);

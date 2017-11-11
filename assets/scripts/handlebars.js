/**
 * Handlebars scripts.
 */
( function( Handlebars ) {

	var content = document.querySelector('.page'),
		accordionURL = './accordion.json';

	function getData(dataURL) {
		var request = new XMLHttpRequest();

		request.open("GET", dataURL, false);
		request.send(null);
		return JSON.parse(request.responseText);
	}

	Handlebars.registerHelper('position', function (index, num, options) {

		if (!options.hash.operator) {
			if (index + 1 === num) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '==') {
			if (index + 1 == num) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<') {
			if (index + 1 < num) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '<=') {
			if (index + 1 <= num) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>') {
			if (index + 1 > num) {
				return options.fn(this);
			}
		}

		if (options.hash.operator === '>=') {
			if (index + 1 >= num) {
				return options.fn(this);
			}
		}

		return options.inverse(this);
	});

	Handlebars.registerHelper('module', function(header, footer, context, options) {
		console.log(context);

		var markup = '<section id="' + header + '" class="p-v-20">' +
						'<header>' +
							'<h2>' + header + '</h2>' +
						'</header>' +
						'<div>' +
							options.fn(this) +
						'</div>' +
						'<footer>' + footer + '</footer>' +
					'</section>';

		return markup;
	});

	var data = getData(accordionURL);

	var template = Handlebars.templates['accordion'];

	var templateData = template(data);

	content.innerHTML += templateData;
})( Handlebars );

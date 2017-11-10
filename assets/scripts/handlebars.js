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

	var accordionData = getData(accordionURL);

	var template = Handlebars.templates['accordion'];

	var templateData = template(accordionData);

	content.innerHTML += templateData;
})( Handlebars );

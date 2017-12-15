(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['accordion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"accordion\" class=\"module\">\n	<header class=\"module__header\">\n		<h2>"
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</h2>\n	</header>\n\n	<div class=\"module__content\">\n		<ul class=\"accordion list-reset\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.panels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n	</div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li>\n				<h3 id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "Heading\" class=\"accordion__heading\">\n					<a href=\"#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "AccPanel\" class=\"accordion__toggle\">"
    + alias4(((helper = (helper = helpers.tabName || (depth0 != null ? depth0.tabName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tabName","hash":{},"data":data}) : helper)))
    + "</a>\n				</h3>\n				<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "AccPanel\" class=\"accordion__content\">\n					<p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n				</div>\n			</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.accordion : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['carousel'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"carousel\" class=\"module\">\n	<header class=\"module__header\">\n		<h2>Carousel</h2>\n	</header>\n\n	<div class=\"module__content\">\n		<div class=\"carousel\">\n			<nav class=\"carousel__dots\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</nav>\n\n			<nav class=\"carousel__arrows\">\n				<button type=\"button\" class=\"carousel__button carousel__button--previous\">\n					<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n					<span class=\"hide-text\">Previous Slide</span>\n				</button>\n				<button type=\"button\" class=\"carousel__button carousel__button--next\">\n					<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n					<span class=\"hide-text\">Next Slide</span>\n				</button>\n			</nav>\n\n			<div class=\"carousel__slides flex\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<a href=\"#"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n					<span class=\"hide-text\">1</span>\n				</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "				<div class=\"carousel__slide\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n					"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.carousel : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['tabs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"tabs\" class=\"module\">\n	<header class=\"module__header\">\n		<h2>Tabs</h2>\n	</header>\n\n	<div class=\"module__content\">\n		<section class=\"component component--tabs\">\n			<header class=\"component__header\">\n				<h2 class=\"component__title\">Horizontal Tabs</h2>\n			</header>\n\n			<div class=\"component__content\">\n				<div class=\"tabs\">\n					<ul class=\"menu tabs__nav list-reset\" aria-label=\"Cat facts\">\n						<li>\n							<a href=\"#k2Panel\" id=\"k2Tab\" class=\"tabs__tab\">K2</a>\n						</li>\n\n						<li>\n							<a href=\"#whitneyPanel\" id=\"whitneyTab\" class=\"tabs__tab\">Whitney</a>\n						</li>\n\n						<li>\n							<a href=\"#minniePanel\" id=\"minnieTab\" class=\"tabs__tab\">Minnie</a>\n						</li>\n\n						<li>\n							<a href=\"#paulPanel\" id=\"paulTab\" class=\"tabs__tab\">Paul</a>\n						</li>\n					</ul>\n\n					<div id=\"k2Panel\" class=\"tabs__panel\">\n						<h2>K2</h2>\n						<p>K2 is the first cat I adopted.</p>\n					</div>\n\n					<div id=\"whitneyPanel\" class=\"tabs__panel\">\n						<h2>Whitney</h2>\n						<p>Whitney is the second cat I adopted, and is K2's biological sister.</p>\n					</div>\n\n					<div id=\"minniePanel\" class=\"tabs__panel\">\n						<h2>Minnie</h2>\n						<p>Minnie is the third Forde family cat, and the first named after a city.</p>\n					</div>\n\n					<div id=\"paulPanel\" class=\"tabs__panel\">\n						<h2>Paul</h2>\n						<p>Paul is the most recent addition to the Forde family, and he loves cuddles.</p>\n					</div>\n				</div>\n			</div>\n		</section>\n\n	</div>\n</section>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['accordion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class=\"p-20\">\n		<h3 id=\"k2Heading\" class=\"accordion__heading m-0\">\n			<a href=\"#k2AccPanel\" class=\"accordion__toggle text-mid-gray hover:text-primary no-underline\">"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "</a>\n		</h3>\n		<div id=\"k2AccPanel\" class=\"accordion__content max-h-0 o-hidden\">\n			<p>"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n		</div>\n	</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"accordion list-reset b-thin b-mid-gray\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
})();
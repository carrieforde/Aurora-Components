(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['accordion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class=\"p-20"
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,(data && data.index),1,{"name":"position","hash":{"operator":">"},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<h3 class=\"m-0\">\n			<a id=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Tab\" href=\"#"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\" class=\"block text-mid-gray hover:text-primary no-underline\" data-role=\"accordion-toggle\" aria-expanded=\"false\" aria-controls=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\">"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "</a>\n		</h3>\n		<div id=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\" class=\"max-h-0 o-hidden\" aria-labelledby=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Tab\" data-role=\"accordion-content\">\n			<p>"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n		</div>\n	</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " b-t-thin b-mid-light-gray";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"accordion list-reset b-thin b-mid-light-gray\" role=\"presentation\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['accordion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"accordion list-reset b-thin b-mid-light-gray\" role=\"presentation\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class=\"p-20"
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,(data && data.index),1,{"name":"position","hash":{"operator":">"},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		<h3 class=\"m-0\">\n			<a id=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Tab\" href=\"#"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\" class=\"block text-mid-gray hover:text-primary no-underline trs-c\" data-role=\"accordion-toggle\" aria-expanded=\"false\" aria-controls=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\">"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "</a>\n		</h3>\n		<div id=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\" class=\"max-h-0 o-hidden trs-mh\" aria-labelledby=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Tab\" data-role=\"accordion-content\">\n			<p>"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n		</div>\n	</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " b-t-thin b-mid-light-gray";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.module || (depth0 && depth0.module) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Accordion","",(depth0 != null ? depth0.data : depth0),{"name":"module","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['tabs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"tabs\">\n	<ul class=\"list-reset flex flex-column m:flex-row\" aria-label=\"Cat facts\" aria-role=\"tablist\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\"relative m-b--1"
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,(data && data.index),1,{"name":"position","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<a href=\"#"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\" id=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Tab\" class=\"block hover:text-secondary no-underline p-h-10 p-v-5 trs-c "
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,(data && data.index),1,{"name":"position","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-role=\"tab-toggle\" role=\"tab\" aria-controls=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\" aria-selected=\""
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,(data && data.index),1,{"name":"position","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\" tabindex=\"-1\">"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "</a>\n		</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " b-h-thin b-mid-light-gray b-t-thin bg-white";
},"5":function(container,depth0,helpers,partials,data) {
    return " text-primary";
},"7":function(container,depth0,helpers,partials,data) {
    return "text-mid-gray";
},"9":function(container,depth0,helpers,partials,data) {
    return "true";
},"11":function(container,depth0,helpers,partials,data) {
    return "false";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div id=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Panel\" class=\"b-thin b-mid-light-gray p-20 bg-white"
    + ((stack1 = (helpers.position || (depth0 && depth0.position) || alias2).call(alias1,(data && data.index),1,{"name":"position","hash":{"operator":"!=="},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" role=\"tabpanel\" aria-labelledby=\""
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "Tab\" tabindex=\"0\">\n		<h2>"
    + alias4(((helper = (helper = helpers.tab || (depth0 != null ? depth0.tab : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tab","hash":{},"data":data}) : helper)))
    + "</h2>\n		<p>"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n	</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return " none";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.module || (depth0 && depth0.module) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Tabs","",(depth0 != null ? depth0.data : depth0),{"name":"module","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();
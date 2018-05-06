// ==UserScript==
// @name        Wikipedia for Multilinguals
// @version     0.4
// @homepageURL http://sjoerd-hemminga.com/2012/03/wikipedia-for-multilinguals/
// @updateURL   https://raw.githubusercontent.com/shemminga/small-hacks/master/wikipedia-mark-lang/wikipedia-mark-lang.js
// @downloadURL https://raw.githubusercontent.com/shemminga/small-hacks/master/wikipedia-mark-lang/wikipedia-mark-lang.js
// @author      Sjoerd Hemminga
// @description Highlight known languages on Wikipedia.
// @match       *://*.wikipedia.org/*
// @run-at      document-idle
// ==/UserScript==

(function() {
	var languages = ['en', 'nl', 'simple'];

	var baseSelectors = languages.map(lng => '#p-lang li.interwiki-' + lng);
	var tagSelectors = baseSelectors.join(", ");
	var beforeSelectors = baseSelectors.map(sel => sel + ':before').join(", ");

	var css = tagSelectors + ' { font-weight: bold; margin-left: -18px !important; display: list-item !important; } ' +
        beforeSelectors + ' { content:"⚫ "; }';
	var cssTextNode = document.createTextNode(css);
	var style = document.createElement('style');
	style.appendChild(cssTextNode);
	document.head.appendChild(style);
})();

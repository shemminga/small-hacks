// ==UserScript==
// @name        Wikipedia for Multilinguals
// @version     0.3
// @homepageURL http://sjoerd-hemminga.com/2012/03/wikipedia-for-multilinguals/
// @updateURL   https://raw.githubusercontent.com/shemminga/small-hacks/master/wikipedia-mark-lang/wikipedia-mark-lang.js
// @downloadURL https://raw.githubusercontent.com/shemminga/small-hacks/master/wikipedia-mark-lang/wikipedia-mark-lang.js
// @author      Sjoerd Hemminga
// @description Highlight known languages on Wikipedia.
// @match       *://*.wikipedia.org/*
// @run-at      document-idle
// ==/UserScript==

(function() {
	var css = '#p-lang li.interwiki-en, #p-lang li.interwiki-nl, #p-lang li.interwiki-simple { font-weight: bold; margin-left: -18px !important; display: list-item !important; } ' +
        '#p-lang li.interwiki-en:before, #p-lang li.interwiki-nl:before, #p-lang li.interwiki-simple:before { content:"⚫ "; }';
	var cssTextNode = document.createTextNode(css);
	var style = document.createElement('style');
	style.appendChild(cssTextNode);
	document.head.appendChild(style);
})();

// ==UserScript==
// @name        Wikipedia for Multilinguals
// @version     0.2
// @homepageURL http://sjoerd-hemminga.com/2012/03/wikipedia-for-multilinguals/
// @updateURL   https://raw.githubusercontent.com/shemminga/small-hacks/master/wikipedia-mark-lang/wikipedia-mark-lang.js
// @downloadURL https://raw.githubusercontent.com/shemminga/small-hacks/master/wikipedia-mark-lang/wikipedia-mark-lang.js
// @author      Sjoerd Hemminga
// @description Highlight known languages on Wikipedia.
// @match       *://*.wikipedia.org/*
// @run-at      document-idle
// ==/UserScript==

(function() {
	var css = 'li.interwiki-en, li.interwiki-nl, li.interwiki-simple { font-weight: bold; margin-left: -13px !important; } ' +
        'li.interwiki-en:before, li.interwiki-nl:before, li.interwiki-simple:before { content:"⚫ "; }';
	var cssTextNode = document.createTextNode(css);
	var style = document.createElement('style');
	style.appendChild(cssTextNode);
	document.head.appendChild(style);
})();

// ==UserScript==
// @name        Wikipedia for Multilinguals
// @version     0.1
// @homepageURL http://sjoerd-hemminga.com/2012/03/wikipedia-for-multilinguals/
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

// ==UserScript==
// @name        Wrap all pre
// @version     0.1
// @author      Sjoerd Hemminga
// @description Wrap all pre, to prevent endless scrollbars.
// @include     *
// @run-at      document-idle
// ==/UserScript==

(function() {
	var css = 'pre { white-space: pre-wrap !important; }';
	var cssTextNode = document.createTextNode(css);
	var style = document.createElement('style');
	style.appendChild(cssTextNode);
	document.head.appendChild(style);
})();

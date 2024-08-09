// ==UserScript==
// @name        Wrap all pre
// @version     0.5
// @author      Sjoerd Hemminga
// @updateURL   https://raw.githubusercontent.com/shemminga/small-hacks/master/wrap-all-pre-userscript/wrap-all-pre.js
// @downloadURL https://raw.githubusercontent.com/shemminga/small-hacks/master/wrap-all-pre-userscript/wrap-all-pre.js
// @description Wrap all pre, to prevent endless scrollbars.
// @match       *://*/*
// @run-at      document-idle
// ==/UserScript==

(function() {
	var css = 'pre { white-space: pre-wrap !important; }';
	var cssTextNode = document.createTextNode(css);
	var style = document.createElement('style');
	style.appendChild(cssTextNode);
	var addElm = document.head ?? document.body;
	if (addElm) addElm.appendChild(style);
})();

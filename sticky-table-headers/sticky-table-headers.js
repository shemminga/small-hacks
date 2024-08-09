// ==UserScript==
// @name        Sticky table headers
// @version     0.2
// @author      Sjoerd Hemminga
// @description Make all th tags sticky, so they stick around when scrolling
// @match       *://*/*
// @run-at      document-idle
// @homepageURL https://github.com/shemminga/small-hacks/tree/master/sticky-table-headers
// @updateURL   https://raw.githubusercontent.com/shemminga/small-hacks/master/sticky-table-headers/sticky-table-headers.js
// @downloadURL https://raw.githubusercontent.com/shemminga/small-hacks/master/sticky-table-headers/sticky-table-headers.js
// ==/UserScript==

(function () {
    var css = 'th { position: sticky; top: 0; }';
    var cssTextNode = document.createTextNode(css);
    var style = document.createElement('style');
    style.appendChild(cssTextNode);
    var addElm = document.head ?? document.body;
    if (addElm) addElm.appendChild(style);
})();
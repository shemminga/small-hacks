// ==UserScript==
// @name        Make more space on YouTube button bar
// @namespace   Violentmonkey Scripts
// @match       *://*.youtube.com/*
// @grant       none
// @version     0.1
// @author      Sjoerd Hemminga
// @description Make more space on the YouTube button bar, so the publish date is shown even in narrow windows
// @run-at      document-idle
// @homepageURL https://github.com/shemminga/small-hacks/tree/master/yt-show-publish-date
// @updateURL   https://raw.githubusercontent.com/shemminga/small-hacks/master/yt-show-publish-date/yt-show-publish-date.js
// @downloadURL https://raw.githubusercontent.com/shemminga/small-hacks/master/yt-show-publish-date/yt-show-publish-date.js
// ==/UserScript==

(function() {
	var css = '#menu ytd-toggle-button-renderer:nth-child(2) yt-formatted-string { display: none !important; }';
	var cssTextNode = document.createTextNode(css);
	var style = document.createElement('style');
	style.appendChild(cssTextNode);
	document.head.appendChild(style);
})();

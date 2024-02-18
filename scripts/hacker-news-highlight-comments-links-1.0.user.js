// ==UserScript==
// @name         Hacker News Comment Links Highlight Without Replies
// @namespace    https://www.levysoft.it
// @description  Highlights all links in the comments on Hacker News without affecting the reply links.
// @include      https://news.ycombinator.com/item?id=*
// @include      http://news.ycombinator.com/item?id=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version      1.0
// ==/UserScript==

var linkBackgroundColor = '#FF4500'; // Orange Red
var linkForegroundColor = '#FFFFFF'; // White

// Find all links within comment text that do not include "reply?id=" and change their style
$('.comment a:not([href*="reply?id="]), .comtext a:not([href*="reply?id="])').css({
    'background-color': linkBackgroundColor,
    'color': linkForegroundColor,
    'padding': '1px 2px',
    'border-radius': '3px',
    'text-decoration': 'none' // Optional: remove underline from links
});

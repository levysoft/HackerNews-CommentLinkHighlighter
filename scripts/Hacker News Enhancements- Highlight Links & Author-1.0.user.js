// ==UserScript==
// @name         Hacker News Enhancements: Highlight Links & Author
// @namespace    https://www.levysoft.it
// @description  Highlights all links in the comments on Hacker News without affecting the reply links, and makes the author name more apparent.
// @include      https://news.ycombinator.com/item?id=*
// @include      http://news.ycombinator.com/item?id=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version      1.0
// ==/UserScript==

// Settings for links
var linkBackgroundColor = '#FF4500'; // Orange Red
var linkForegroundColor = '#FFFFFF'; // White

// Settings for author highlight
var authorBackgroundColor = '#8000FF'; // Purple
var authorForegroundColor = '#FFFFFF'; // White
var newUserForegroundColor = '#00FF00'; // Bright Green

// Highlight links in comments, excluding reply links
$('.comment a:not([href*="reply?id="]), .comtext a:not([href*="reply?id="])').css({
    'background-color': linkBackgroundColor,
    'color': linkForegroundColor,
    'padding': '1px 2px',
    'border-radius': '3px',
    'text-decoration': 'none' // Optionally remove underline from links
});

// Identify the author of the post
var author = $('table .subtext').find('a').eq(0).text();

// Highlight the author's name in comments
$('.comhead').each(function() {
    if ($(this).find('a[href="user?id=' + author + '"]').length > 0) {
        $(this).find('a[href="user?id=' + author + '"]').css({
            'background-color': authorBackgroundColor,
            'color': authorForegroundColor,
            'padding': '1px 2px',
            'border-radius': '3px'
        });
    }
});

// Adjust color for new users (if applicable)
$('.comhead a[href="user?id=' + author + '"]').find("font").each(function() {
    if ($(this).length) {
        $(this).attr("color", newUserForegroundColor);
    }
});

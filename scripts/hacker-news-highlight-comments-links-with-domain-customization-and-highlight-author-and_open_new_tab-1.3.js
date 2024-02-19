// ==UserScript==
// @name         Hacker News Enhancements: Highlight Comment Links (Without Replies) With Domain Customization, Highlight Author and open link in a new tab 
// @namespace    https://github.com/levysoft
// @author       levysoft
// @description  Highlights all links in the comments on Hacker News with custom colors based on the domain, excluding reply links, and ensures they open in a new tab.
// @include      https://news.ycombinator.com/item?id=*
// @include      http://news.ycombinator.com/item?id=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version      1.3
// ==/UserScript==

$(document).ready(function() {
    $('.comment a:not([href*="reply?id="]), .comtext a:not([href*="reply?id="])').each(function() {
        var link = $(this);
        var href = link.attr('href');
        // Default link style
        var backgroundColor = '#FF4500'; // Orange Red
        var color = '#FFFFFF'; // White

        // Customize colors based on domain
        if (href.includes('github.com')) {
            backgroundColor = '#000000'; // GitHub: Black background
            color = '#FFFFFF'; // White text
        } else if (href.includes('wikipedia.org')) {
            backgroundColor = '#808080'; // Wikipedia: Grey background
            color = '#FFFFFF'; // White text
        }
        
        // Apply the style and ensure links open in a new tab
        link.css({
            'background-color': backgroundColor,
            'color': color,
            'padding': '1px 2px',
            'border-radius': '3px',
            'text-decoration': 'none'
        }).attr('target', '_blank');
    });
});

// ==UserScript==
// @name         Hacker News Enhancements
// @namespace    https://github.com/levysoft
// @author       levysoft
// @description  Highlights links in Hacker News comments with domain-based colors, highlights the author, ensures links open in new tabs, and adds links for voted submissions and comments in the header.
// @include      https://news.ycombinator.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version      1.1
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    // Define styles for links based on their domain and for author highlighting
    const styles = {
        'github.com': { backgroundColor: '#000000', color: '#FFFFFF' }, // GitHub links
        'wikipedia.org': { backgroundColor: '#808080', color: '#FFFFFF' }, // Wikipedia links
        'default': { backgroundColor: '#FF4500', color: '#FFFFFF' }, // Default style for other links
        'author': { backgroundColor: '#8000FF', color: '#FFFFFF' } // Style for author highlighting
    };

    // Function to apply the appropriate style to a link
    function applyLinkStyle(link) {
        const href = link.attr('href');
        let style = styles.default; // Use default style unless a specific domain match is found

        Object.keys(styles).forEach(domain => {
            if (href.includes(domain)) {
                style = styles[domain];
            }
        });

        link.css({
            'background-color': style.backgroundColor,
            'color': style.color,
            'padding': '1px 2px',
            'border-radius': '3px',
            'text-decoration': 'none'
        }).attr('target', '_blank');
    }

    // Apply styles to all links in comments, excluding 'reply' links
    $('.comment a:not([href*="reply?id="]), .comtext a:not([href*="reply?id="])').each(function() {
        applyLinkStyle($(this));
    });

    // Highlight the author's name using the 'author' style
    const author = $('table .subtext').find('a').eq(0).text();
    $('.comhead a[href="user?id=' + author + '"]').css(styles.author);

    // Extract the username from the element with id 'me'
    var userLink = document.querySelector('#me');
    if (userLink && userLink.href) {
        var userId = userLink.href.split('=')[1]; // Extracts the username from the link

        // Define the links to be added with dynamic username
        var links = [
            { href: '/upvoted?id=' + userId, text: '↑ subs' },  // Link for upvoted submissions
            { href: '/upvoted?id=' + userId + '&comments=t', text: '↑ comms' } // Link for upvoted comments
        ];

        // Select the link list element
        var spanPagetop = document.querySelector('.pagetop');

        // Loop through each link and add it
        links.forEach(function(link) {
            var separator = document.createTextNode(' | ');
            var newLink = document.createElement('a');
            newLink.href = link.href;
            newLink.textContent = link.text;
            spanPagetop.appendChild(separator); // Adds a separator before the link
            spanPagetop.appendChild(newLink); // Adds the link
        });
    }
});

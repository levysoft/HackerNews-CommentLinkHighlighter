// ==UserScript==
// @name         Hacker News Enhancements
// @namespace    https://github.com/levysoft
// @author       levysoft
// @description  Highlights links in Hacker News comments with domain-based colors, highlights the author, and ensures links open in new tabs.
// @include      https://news.ycombinator.com/item?id=*
// @include      http://news.ycombinator.com/item?id=*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version      1.0
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

        // Check each domain in styles to see if it matches the link's href
        Object.keys(styles).forEach(domain => {
            if (href.includes(domain)) {
                style = styles[domain];
            }
        });

        // Apply the style and ensure the link opens in a new tab
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

    // Highlight the author's name using the 'author' style from the styles object
    const author = $('table .subtext').find('a').eq(0).text();
    $('.comhead a[href="user?id=' + author + '"]').css({
        'background-color': styles.author.backgroundColor, // Apply author background color
        'color': styles.author.color, // Apply author text color
        'padding': '1px 2px',
        'border-radius': '3px'
    }).find("font").css('color', '#00FF00'); // Optional: Adjust color for new users if needed
});

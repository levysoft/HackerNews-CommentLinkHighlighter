// ==UserScript==
// @name         Hacker News Add Links Upvoted
// @namespace    https://github.com/levysoft
// @author       levysoft
// @description  Adds dynamic links for voted submissions and comments in the Hacker News header based on the logged-in username
// @match        https://news.ycombinator.com/*
// @grant        none
// @version      1.0
// ==/UserScript==

(function() {
    'use strict';

    // Extract the username from the element with id 'me'
    var userLink = document.querySelector('#me');
    if (userLink && userLink.href) {
        var userId = userLink.href.split('=')[1]; // Extracts the username from the link

        // Select the link list element
        var spanPagetop = document.querySelector('.pagetop');

        if (spanPagetop) {
            // Define the links to be added with dynamic username
            var links = [
                { href: '/upvoted?id=' + userId, text: '↑ subs' },  // Link for upvoted submissions
                { href: '/upvoted?id=' + userId + '&comments=t', text: '↑ comms' } // Link for upvoted comments
            ];

            // Loop through each link and add it
            links.forEach(function(link) {
                var separatore = document.createTextNode(' | ');
                var nuovoLink = document.createElement('a');
                nuovoLink.href = link.href;
                nuovoLink.textContent = link.text;
                spanPagetop.appendChild(separatore); // Adds a separator before the link
                spanPagetop.appendChild(nuovoLink); // Adds the link
            });
        }
    }
})();

// ==UserScript==
// @name         GitHub Auto Redirect to User Repositories
// @namespace    https://github.com/levysoft
// @author       levysoft
// @description  Automatically redirect logged-in GitHub users to their repositories page.
// @match        https://github.com/*
// @grant        none
// @version      1.0
// ==/UserScript==

(function() {
    'use strict';

    // Function to search for the meta tag and return its content (username)
    function getUsernameFromMetaTag() {
        const metaTag = document.querySelector('meta[name="user-login"]');
        return metaTag ? metaTag.getAttribute('content') : null;
    }

    // Get the username from the meta tag
    const username = getUsernameFromMetaTag();

    // If a username exists and the user is on the homepage, redirect to the user's repositories page
    if (username && window.location.pathname === '/') {
        window.location.href = `https://github.com/${username}?tab=repositories`;
    }
})();

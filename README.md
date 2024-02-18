# Hacker News Enhancer

Collection of Tampermonkey scripts designed to enhance your browsing experience on Hacker News. Each script serves a specific purpose, from highlighting links in comments to making author names more apparent. These scripts are easy to install and use, aiming to improve readability and navigation on Hacker News.

## Scripts

### Hacker News Comment Link Highlighter
**File**: `scripts/hacker-news-highlight-comments-links-1.0.user.js`

Highlights all links within the comments on Hacker News, excluding reply links. This script makes external links stand out with a custom background color, improving the readability of comments. This allows users to easily identify external or relevant links without being distracted by the default reply links present under each comment.

After installation, navigate to [Hacker News](https://news.ycombinator.com/) and open any comment thread. You will notice that all links in the comments are now highlighted, making them more visible as you scroll through the page.

### Hacker News Author Highlight and Link Highlighting Without Replies
**File**: `scripts/hacker-news-highlight-comments-links-and-author-1.0.user.js`

This script enhances the visibility of the post author's name in the comments section by applying a distinct background color to it, making it more apparent when scrolling through comments. Additionally, it highlights all external links within the comments, excluding the "reply" links, to make them stand out. This dual functionality helps users easily identify both the comments made by the original poster and the external resources linked within the comments, improving navigation and readability on Hacker News.

After installation, navigate to [Hacker News](https://news.ycombinator.com/) and enter any article's comments section. You'll immediately notice the script's enhancements: the post author's name stands out with a distinct background color for easy identification, and external links within comments are highlighted—excluding "reply" links—streamlining your navigation by differentiating between content and discussion management.

These enhancements work together to provide a more streamlined and user-friendly browsing experience on Hacker News, helping you to focus on content that matters most to you.

## How to Install
To use this script, you must have Tampermonkey installed in your browser. Tampermonkey is available for Chrome, Firefox, Safari, and other modern browsers.

### Installation Steps:
1. Install Tampermonkey in your browser:
    - [Tampermonkey for Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
    - [Tampermonkey for Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
    - [Tampermonkey for Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
2. Navigate to the desired script in the `/scripts` directory.
3. Click on the script file to view it, then click the "Raw" button to open the raw script file.
4. Tampermonkey should automatically recognize the script and display an installation window.. Click "Install" to proceed.

## Feedback and Contributions
Your feedback is highly appreciated! If you have suggestions, bugs to report, or improvements, feel free to open an issue or a pull request in the GitHub repository. If you would like to contribute to the project, pull requests are welcome.

## License
This script is released under the MIT license. Feel free to use, modify, and distribute it as you wish.

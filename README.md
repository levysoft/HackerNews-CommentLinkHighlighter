# UserScripts for Tampermonkey

This repository contains a collection of Tampermonkey scripts designed to enhance the user experience on popular websites like GitHub and Hacker News.

## Included Scripts

### GitHub Auto Redirect to User Repositories
**File**: `userscripts/github-auto-redirect-to-user-repositories-1.0.user.js`

This script automatically redirects logged-in GitHub users to their repositories page as soon as they visit the GitHub homepage. It is intended for those who want to quickly access their projects without having to navigate through the user menu.

### Hacker News Enhancements
**File**: `userscripts/hacker-news-enhancer-1.0.user.js`

This script improves reading comments on Hacker News by highlighting links based on their domain, highlighting the name of the post author, and ensuring that all links open in a new tab. It is ideal for users who desire more intuitive navigation and greater readability of content, allowing for easy identification of external or relevant links.

After installation, navigate to [Hacker News](https://news.ycombinator.com/) and open any comment thread. You will notice that all links are now highlighted not only to stand out but also to indicate their source domain at a glance, and clicking on them will open the content in a new tab.

## Compatibility and Installation

These scripts have been designed to be compatible with both **Tampermonkey** and **Greasemonkey**, thus providing a wide range of options for users of different browsers. However, given the greater versatility and availability on multiple platforms, we recommend using **Tampermonkey** for a better user experience as it is available for Chrome, Firefox, Safari, and other modern browsers.
The functionality of the scripts remains the same regardless of the script manager used. Ensure you have the latest version of the script manager installed to guarantee compatibility and proper functioning of the scripts.

### Installation Steps:
1. Install Tampermonkey in your browser:
    - [Tampermonkey for Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
    - [Tampermonkey for Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
    - [Tampermonkey for Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
2. Navigate to the desired script in the `/scripts` directory.
3. Click on the script file to view it, then click the "Raw" button to open the raw script file.
4. Tampermonkey should automatically recognize the script and display an installation window. Click "Install" to proceed.

### Installation with Greasemonkey (for Firefox users)
If you are a **Firefox** user and prefer **Greasemonkey**, the scripts should also work in this environment. However, since our installation guide is optimized for Tampermonkey, we invite you to follow the general instructions provided by Greasemonkey's documentation to add userscripts to your browser.

## Feedback and Contributions
Your feedback is highly appreciated! If you have suggestions, bugs to report, or improvements, feel free to open an issue or a pull request in the GitHub repository. If you would like to contribute to the project, pull requests are welcome.

## License
This script is released under the MIT license. Feel free to use, modify, and distribute it as you wish.

/**
 * @todo Figure out why these asset imports are required
 */
import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

// Background scripts go here
console.log("This is the background.js file!");

/**
 * Uses chrome API to fetch the active tab URL
 * @dependency Requires "tabs" permission in manifest.json
 */
const sendPageUrl = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let response;
        try {
            response = new URL(tabs[0].url).hostname;
        } catch (error) {
            console.error(error);
            response = "BAD_URL";
            console.error(`Response: ${response}`);
            console.error(`TABS_URL: ${tabs[0].url}`);
        }
        chrome.runtime.sendMessage({ type: "PAGE_URL", response });
    });
}

/**
 * Handles a message sent from content.js or popup that is not caught
 * @param {string} type This is the type that is not found (e.g. REQ_PAGE_URL)
 */
const error404 = (type) => {
    const response = `Request type (${type}) not found`;
    chrome.runtime.sendMessage({ type: "404", response });
}

/**
 * Ensures that background.js is not called with a null or undefined argument
 * Prevents null pointer and undefined exceptions
 * @param {string} message 
 */
const error400 = (message) => {
    const response = `INVALID MESSAGE: ${message}`;
    chrome.runtime.sendMessage({ type: "400", response });
}

/**
 * Listener for background.js for content.js/popup calls.
 * @param {Object} message The message from content.js and/or popup
 * @param {*} callback Unused
 */
chrome.runtime.onMessage.addListener(function (message, callback) {
    if (message === null || message === undefined) {
        error400(message);
    } else if (message.type === "REQ_PAGE_URL") {
        sendPageUrl();
    } else {
        error404(message.type);
    }
});
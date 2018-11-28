chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "updateIcon") {
        console.log('updateIcon', msg.value);

        if (msg.value) {
            chrome.browserAction.setIcon({ path: "/icons/icon32_bad.png" });
        } else {
            chrome.browserAction.setIcon({ path: "/icons/icon32_bad.png" });
        }
    }
    if (msg.action === "updateBadge") {
        console.log('updateBadge', msg.value);

        chrome.browserAction.setBadgeText({ text: msg.value });
    }
});

chrome.browserAction.getBadgeText({},(text) => {
    console.log(text);
})
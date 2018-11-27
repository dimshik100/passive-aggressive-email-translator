chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
        if (msg.value) {
            chrome.browserAction.setIcon({path: "/assets/tick.png"});
        } else {
            chrome.browserAction.setIcon({path: "/assets/cross.png"});
        }
    }
});
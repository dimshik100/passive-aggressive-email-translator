chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "updateIcon") {
    console.log('updateIcon', msg.value);

    // if (msg.value) {
    //   chrome.pageAction.setIcon({ path: "/icons/icon32_bad.png" });
    // } else {
    //   chrome.pageAction.setIcon({ path: "/icons/icon32_bad.png" });
    // }
  }
  if (msg.action === "updateBadge") {
    console.log('updateBadge', msg.value);

    // chrome.browserAction.setBadgeText({ text: msg.value });
  }
});

// chrome.browserAction.getBadgeText({}, (text) => {
//   console.log(text);
// });


const rule2 = {
  // That fires when a page's URL contains a 'mail.google.com' ...
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { urlContains: 'mail.google.com' },
    })
  ],
  // And shows the extension's page action.
  actions: [new chrome.declarativeContent.ShowPageAction()]
};


chrome.runtime.onInstalled.addListener(function () {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([rule2]);
  });
});
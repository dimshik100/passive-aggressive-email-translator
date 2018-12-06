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
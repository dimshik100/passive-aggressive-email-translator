"use strict";

function addScript(src) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = chrome.extension.getURL(src);
  (document.body || document.head || document.documentElement).appendChild(script);
}

// This will update the icon of the extension
// The icon should be grey and disabled when not in gmail.com
// the icon should be happy emoji if we are in gmail and no passive aggressive phrases found
// the icon should be angry emoji if we are in gmail and we found passive aggressive phrases
// chrome.runtime.sendMessage({
//   action: 'updateIcon',
//   value: false // TODO: pass the icon name according to state
// });


// This event will be fired by extension.js when it finds passive aggressive phrases in an open email
// It will pass the number of phrases found
document.body.addEventListener('foundPassiveAggressiveContent', function (e) {  
  console.log('foundPassiveAggressiveContent');

  // // This will send message to background.js to update the number of found phrases in the extension icon badge
  // chrome.runtime.sendMessage({
  //   action: 'updateBadge',
  //   value: '3' // TODO: update the number and pass it as string
  // });
}, false);


// Important to add the script to the DOM only after we registered the event listeners
addScript("extension.js");

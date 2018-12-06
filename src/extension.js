"use strict";

console.log("Passive Aggressive Extension loading...");
const jQuery = require("jquery");
const $ = jQuery;
const GmailFactory = require("gmail-js");
const gmail = new GmailFactory.Gmail($);
window.gmail = gmail;

// making jquery global - not sure if i need it
window.jQuery = jQuery;
window.$ = window.jQuery;

const dictionary = require('./dictionary');

require('mark.js/dist/jquery.mark.js');
require('tipso');

var event = document.createEvent('Event');

// Define that the event name is 'foundPassiveAggressiveContent'.
event.initEvent('foundPassiveAggressiveContent', true, true);

// target can be any Element or other EventTarget.
document.body.dispatchEvent(event);


gmail.observe.on("load", () => {
  const userEmail = gmail.get.user_email();

  console.log(`
  Hello, ${userEmail}. This is your passive aggressive extension talking!
  Fine,
  Whatever.`);

  checkIfWeHaveEmailContents();

  gmail.observe.on('view_thread', function (obj) {
    console.log('DIMA: conversation thread opened HAHAHA', obj); // gmail.dom.thread object
    checkIfWeHaveEmailContents();
  });
});

function checkIfWeHaveEmailContents() {
  setTimeout(() => {
    // gets the email contents of the last open email in the thread
    const emailContents = gmail.dom.email_contents();
    //console.log(obj.$el[0]);
    console.log(emailContents[0]);

    findAndMarkPassiveAggressivePhrases(emailContents[0], dictionary);

  }, 500);
}

function findAndMarkPassiveAggressivePhrases(emailContentsElement, dictionary) {
  const arrayOfKeys = Object.keys(dictionary);

  const $emailContentsElement = $(emailContentsElement);

  for (const key of arrayOfKeys) {
    $emailContentsElement.mark(key, {
      "acrossElements": true,
      "separateWordSearch": false,
      "diacritics": false,
      "className": "passive-aggressive-phrase",
      "each": (element, other) => {
        console.log(element, other);

        const translation = dictionary[key];

        console.log(translation);

        $(element).tipso({
          animationIn: 'bounceIn',
          animationOut: 'hinge',
          size: 'large',
          background: '#ff0000',
          color: '#ffffff',
          content: translation
        });
      }
    });
  }
}
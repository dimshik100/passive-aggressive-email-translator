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

  // // DOM observers
  // gmail.observe.on("compose", function (compose, type) {
  //   // type can be compose, reply or forward
  //   console.log('DIMA: api.dom.compose object:', compose, 'type is:', type);  // gmail.dom.compose object
  // });

  // gmail.observe.on('recipient_change', function (match, recipients) {
  //   console.log('DIMA: recipients changed', match, recipients);
  // });

  checkIfWeHaveEmailContents();

  gmail.observe.on('view_thread', function (obj) {
    console.log('DIMA: conversation thread opened HAHAHA', obj); // gmail.dom.thread object
    checkIfWeHaveEmailContents();
  });

  // gmail.observe.on('view_email', function (obj) {
  //   console.log('DIMA: individual email opened', obj);  // gmail.dom.email object

  //   // check if we have some contents in the opened individual email inside a thread
  //   if (obj.id_element && obj.id_element.length > 0) {
  //     // gets the contents of this individual email inside a thread
  //     console.log(obj.id_element[0])
  //   }
  // });

  // gmail.observe.on("open_email", function (id, url, body, xhr) {
  //   console.log("DIMA: id:", id, "url:", url, 'body', body, 'xhr', xhr);
  //   console.log(gmail.get.email_data(id));
  //   console.log(gmail.dom.email_contents());
  // })
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

  $(emailContentsElement).mark(arrayOfKeys, {
    "acrossElements": true,
    "separateWordSearch": false,
    "diacritics": false,
    "className": "passive-aggressive-phrase",
    "each": (element, other) => {
      console.log(element, other);
      const translation = dictionary[element.innerText.toLowerCase()];
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
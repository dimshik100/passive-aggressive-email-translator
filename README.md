
# Passive Aggressive Email Translator

This repo contains a Chrome extension that identifies and translates passive 
aggressive phrases in emails.
Currently works only with Gmail client.
This extension is using [gmail.js](https://github.com/KartikTalwar/gmail.js/) library.

## Try it

<!-- Add a link to add the chrome extension -->

## For developers

First get the code and build it:

````
# get code
git clone https://github.com/dimshik100/passive-aggressive-email-translator/

# get dependencies and build
npm install
npm run build
````

Now ensure the code loads and works:

* [Load the folder containing the extension](https://developer.chrome.com/extensions/getstarted) (or `manifest.json`) in
your browser.

    1. Open the Extension Management page by navigating to chrome://extensions.
        The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
    2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
    3. Click the LOAD UNPACKED button and select the extension directory.
![alt text](https://developer.chrome.com/static/images/get_started/load_extension.png)

    4. Ta-da! The extension has been successfully installed. Because no icons were included in the manifest, a generic toolbar icon will be created for the extension.


* Load `mail.google.com` in your browser and open the developer console.

You should be greeted by a message saying the following

    Hello, <you>. This is your passive aggressive extension talking!

If that works, you should now be ready to customize the
extension-code. Do this by editing `extension.js`.

You can also interact with a instance of `gmail.js`. 

`gmail` should be exposed in the developer console as a global
variable.

You can use this to play around and get familiar with the API.

Cheers!




<!-- 

TODO: 
Create a video of how the extension works.
    * Open gmail
    * change all fonts to "block" font
    * Start video capturing of the screen
    *send yourself an email from mobile, It will show up with real text
    * Open the email, a small notification should appear on it "This email may contain passive aggressive content"
    * Hover with the pointer on the marked passive aggressive phrases
    * The popup will show the real meaning of the phrase

Check if we can use brain.js to detect more passive aggressive phrases

Create a logo and an icon
(https://www.barnesandnoble.com/w/passive-aggression-martin-kantor-md/1125984078) 

-->



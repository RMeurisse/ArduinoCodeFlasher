# ArduinoCodeFlasher

WIP (WORK IN PROGRESS)

## What's that?

Ability to upload code to an Arduino Board from Google Chrome without the need to use external software like the Arduino IDE.

Makes use of the Google Chrome WebUSB API. (Needs security - HTTPS to work, localhost will work for testing)

## Code

The project consists of a node server to host a webpage on localhost (still testfase).
The webpage will search for Arduino devices and establish connection. 

## Running the project

 - Command: "(sudo) node server.js"
 - Go to: "http://localhost:8080/"
 - Use the "Test"-Button to connect to an Arduino connected to your device.


## Functionality to be added
 - Resolving the CORS-error ('Access-Control-Allow-Origin')


# avrgirl-arduino chrome extension

Use avrgirl-arduino in the browser! An example chrome app that you can fork and make your own. 

## Instructions

Install the following tools globally:

1. `npm install -g browserify`
2. `npm install -g http-server`

To run the demo:

1. Fork and clone this repo
2. Run `npm install` within the newly cloned local repo
3. Run `browserify background.js -o background.bundle.js`
4. In your Chrome browser, visit `chrome://extensions`
5. Click `Load unpacked extension`
6. Navigate to this cloned repo, and click `Select`
7. Click `Launch` when you see the extension appear at the top of the extensions list
8. Copy the `id` value of the extension, and update `var extensionid = '...';` line in `test.html`
9. Run the command `http-server -a 127.0.0.1 -p 8080` back in your terminal and visit `127.0.0.1:8080/test.html` in your Chrome browser. Also open the dev tools for logs!
10. Plug in an Arduino Uno, and upload a compatible .hex file to it using the test.html form
11. :tada:

To develop this further or make changes:

1. Edit `background.js` (not `background.bundle.js`)
2. Always run `browserify background.js -o background.bundle.js` each time you change `background.js` or `lib/flash.js`, and then manually reload the chrome app.
3. When you reload the chrome app, you'll also need to refresh `test.html` so the page can reconnect to the reloaded chrome app.
4. Using `watchify` instead of `browserify` is totes cool and will work as expected.

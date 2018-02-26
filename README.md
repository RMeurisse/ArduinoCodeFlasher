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
 - Flashing the Arduino correctly
 - Writing the code in the textbox to the connected Arduino, so integration with the ArduinoCodeCompiler repository.



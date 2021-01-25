const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ 'origin': true});
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// Setting Key Variables
const api = express();
admin.initializeApp(functions.config().firebase);

api.disable('etag');
api.set('trust proxy', true);

const router = express.Router();




// Need function to check for UUID in the database for users who do not want to sign up. To pull up alert on the application side. Send Data through the request for the alert. Or account information along with the NFC tag information 

// Need to get something to store the messages sent through here with pro. 

// Error handling with toast notifications.

// Notifications need to be set up through here as well with Firebase for those that are recieving a message.


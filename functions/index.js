const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ 'origin': true});
const admin = require('firebase-admin');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3Hi0b3AQmTfAxxNtfMNhPu43eOwWKrrI",
    authDomain: "at-me-app.firebaseapp.com",
    databaseURL: "https://at-me-app-default-rtdb.firebaseio.com",
    projectId: "at-me-app",
    storageBucket: "at-me-app.appspot.com",
    messagingSenderId: "993588136824",
    appId: "1:993588136824:web:afe177cdbbf95c4721168d",
    measurementId: "G-C4E9R7SMNR"
  };


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// Setting Key Variables
const api = express();
firebase.initializeApp(firebaseConfig)
api.disable('etag');
api.set('trust proxy', true);

const router = express.Router();

router.use('/api/auth', require('./auth/auth'));



// Need function to check for UUID in the database for users who do not want to sign up. To pull up alert on the application side. Send Data through the request for the alert. Or account information along with the NFC tag information 

// Need to get something to store the messages sent through here with pro. 

// Error handling with toast notifications.

// Notifications need to be set up through here as well with Firebase for those that are recieving a message.


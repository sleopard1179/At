const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ 'origin': true});
const admin = require('firebase-admin');
const firebase = require('firebase/app');


const router = express.Router();
const db = firebase.database();
const auth = firebase.auth();

function checkUUID(uuid, res, next) {
    dbRef = db.ref('users/' + uuid);
    dbRef.once('value').then((snapshot) => {
        var uid = (snapshot.val()) || 'None';
        res.send(uid);
        return true;
    })
    .catch((err) => {
        next(err);
    });
}

function createUserData(userData, uid) {
    return {
        'userData': userData,
        'uid': user.uid
    }
}


function createUserAnonymous(uuid, userData, res, next) {
    dbRef = db.ref('users/' + uuid);
    anonymousSignUp(next, (isError) => {
        if (isError) {
            return;
        } else {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    uid = user.uid;
                    userDict = createUser(userData, uid)
                    dbRef.set(userDict);
                } else {
                    res.status(500).send('Error Creating User')
                }
            });
        }
    });
}

function anonymousSignUp(next, callback) {
    auth.signInAnonymously()
        .then(() => {
            console.log('Created User Anonymously');
            callback(false);
            return false;
        })
        .catch((err) => {
            // eslint-disable-next-line callback-return
            next(err);
            callback(true)
            return true;
        });
}


router.get('/check', (req, res, next) => {
    bodyReq = req.body;
    uuid = bodyReq.uuid;
    checkUUID(uuid, res, next);
});

router.post('/create/anonymous', (req, res, next) => {
    bodyReq = req.body;
    uuid = bodyReq.uuid;
    createUserAnonymous(uuid, bodyReq, res, next);
});
/*router.post('/create/user', (req, res, next) => {
    bodyReq = req.body;
    uuid = bodyReq.uuid;
}) */

router.use((err, req, res, next) => {
    // Format error and forward to generic error handler for logging and
    // responding to the request
    var errorCode = err.code;
    var errorMessage = err.message;
    res.status(errorCode).send(errorMessage);
});

module.exports = [router];
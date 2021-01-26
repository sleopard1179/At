const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ 'origin': true});
const admin = require('firebase-admin');
const firebase = require('firebase/app');


const router = express.Router();
const db = firebase.database();


function checkUUID(uuid, res, next) {
    dbRef = db.ref('users/' + uuid);
    dbRef.once('value').then((snapshot) => {
        var uid = (snapshot.val()) || 'None'
        res.send(uid);
        return true;
    })
    .catch((err) => {
        next(err);
    });
}

router.get('/check:uuid', (req, res, next) => {
    bodyReq = req.body;
    uuid = bodyReq.uuid;
    checkUUID(uuid, res, next);
});

router.post('/users:', )

router.use((err, req, res, next) => {
    // Format error and forward to generic error handler for logging and
    // responding to the request
    err.response = {
      message: err.message,
      internalCode: err.code
    };
    next(err);
});
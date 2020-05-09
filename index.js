
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const main = require('./routes/main');
const cors = require('cors');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date()}`);
  next();
})
app.use('/', main);

// eslint-disable-next-line handle-callback-err
app.use((err, req, res, next) => {

});

exports.bisangajiapp = functions.https.onRequest(app);

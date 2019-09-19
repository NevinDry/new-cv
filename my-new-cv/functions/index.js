const functions = require('firebase-functions');

const cors = require('cors')({
  origin: true
});

const mailTemplates = require("./mailTemplates");
const env = require("./env");

const sengridApiKey = env.variables.sendgridApiKey;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(sengridApiKey);

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
     sgMail.send(mailTemplates.getContactMail(req.body))
      .then(() => res.status(200).send({message: 'email sent!'}))
      .catch(err => res.status(400).send(err))
  });

});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.status(200).send({
      test: 'Testing functions'
    });
  });
});

exports.helloWorldPost = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.status(500).send({
      test: 'Testing functions'
    });
  });
});
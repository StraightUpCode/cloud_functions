const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log('It Works')
});

exports.updateLastMessage = functions.firestore.document('/chat_publico/chat_general/chat_msg/{msgId}')
  .onCreate((snapshot, context) => {
    return admin.firestore()
      .collection('chat_publico')
      .doc('chat_general')
      .update({ last_message: snapshot.data() })
  })

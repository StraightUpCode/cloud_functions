const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.updateLastMessage = functions.firestore
  .document('/chat_publico/{sala_chat}/chat_msg/{msgId}')
  .onCreate((snapshot, context) => {
    const data = snapshot.data()
    return admin.firestore()
      .collection('chat_publico')
      .doc(context.params.sala_chat)
      .update({ last_message: data })
  })

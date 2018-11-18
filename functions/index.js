const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.updateLastMessage = functions.firestore
  .document('/chat_publico/{sala_chat}/chat_msg/{msgId}')
  .onCreate((snapshot, context) => {
    const data = snapshot.data()
    return admin.firestore()
      .collection('chat_publico')
      .doc(context.params.sala_chat)
      .update({ last_message: data })
  })

exports.userCreated = functions.auth.user()
  .onCreate((user, ctx) => {
    console.log(`User : ${JSON.stringify(user)}`)
    console.log(`Context : ${ctx}`)
  })

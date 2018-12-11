const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.updateLastMessage = functions.firestore
  .document('/{tipo_chat}/{sala_chat}/chat_msg/{msgId}')
  .onCreate((snapshot, context) => {
    const data = snapshot.data()
    return admin.firestore()
      .collection(context.params.tipo_chat)
      .doc(context.params.sala_chat)
      .update({ last_message: data })
  })

exports.addUserToPrivateChat = functions.firestore
  .document('/users/{user_id}/chats_privados/{new_private_chat}')
  .onCreate((snapshot, context) => {
    const { chatId } = snapshot.data()
    return admin.firestore()
      .collection('salas_chat')
      .doc(chatId)
      .collection('miembros')
      .add({ userId: context.params.user_id })
  })
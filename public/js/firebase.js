import 'firebase'
import firebase from 'firebase/app'


const initialConfig = {
  apiKey: "AIzaSyAW1gzeqFTj_IR2iQ8VE1IysgfsiTVyxcY",
  authDomain: "chatapp-test-4e669.firebaseapp.com",
  databaseURL: "https://chatapp-test-4e669.firebaseio.com",
  projectId: "chatapp-test-4e669",
  storageBucket: "chatapp-test-4e669.appspot.com",
  messagingSenderId: "260878537518"
}
let app
try {
  app = firebase.initializeApp(initialConfig)
} catch (e) {
  console.log(e)
}
const FirebaseAuth = app.auth()
const Firestore = app.firestore()
const FireStorage = app.storage();
export {
  firebase,
  FirebaseAuth,
  Firestore,
  FireStorage,
}
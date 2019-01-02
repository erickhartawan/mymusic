import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var config = {
  apiKey: "AIzaSyAW7YftOhp96lVxxnnxNgS2TFXLNbxvE8U",
  authDomain: "mylyrics-1008.firebaseapp.com",
  databaseURL: "https://mylyrics-1008.firebaseio.com",
  projectId: "mylyrics-1008",
  storageBucket: "mylyrics-1008.appspot.com",
  messagingSenderId: "796621086342"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});
export default firebase
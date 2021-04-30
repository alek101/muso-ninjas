import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCD74kvcySL5J5k-xTZosh_k_M-O-pPBrI",
    authDomain: "muso-ninjas-46c47.firebaseapp.com",
    projectId: "muso-ninjas-46c47",
    storageBucket: "muso-ninjas-46c47.appspot.com",
    messagingSenderId: "689619192633",
    appId: "1:689619192633:web:9e4d4f1260978bdde1f6e8"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
 const projectFirestore = firebase.firestore()
 const projectAuth = firebase.auth()
 const projectStorage = firebase.storage()

 //timestamps
 const timestamp = firebase.firestore.FieldValue.serverTimestamp

 export {projectFirestore, projectAuth, projectStorage, timestamp}
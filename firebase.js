import firebase from 'firebase/app';
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAuj5MbovWOnrYYOe2JeYFB0ZwXrJC6-DA",
    authDomain: "finote-d0a9a.firebaseapp.com",
    projectId: "finote-d0a9a",
    storageBucket: "finote-d0a9a.appspot.com",
    messagingSenderId: "852170044795",
    appId: "1:852170044795:web:20ca216fb8d8f8ade279de",
    measurementId: "G-S3DD3Y7BPN"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
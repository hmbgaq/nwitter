import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID

    // apiKey: "AIzaSyDUqgirGGrt9sySjqgzABt8aHjZBswpjvw",
    // authDomain: "nwitter-bc8c0.firebaseapp.com",
    // projectId: "nwitter-bc8c0",
    // storageBucket: "nwitter-bc8c0.appspot.com",
    // messagingSenderId: "908843954209",
    // appId: "1:908843954209:web:4c8574fb0e7b97278ff360"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
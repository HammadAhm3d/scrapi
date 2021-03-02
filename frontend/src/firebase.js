import firebase from "firebase";
// import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiFLKc-6Xs9idEQIzzOeIMugurFFB64NE",
    authDomain: "accountsmodule.firebaseapp.com",
    databaseURL: "https://accountsmodule.firebaseio.com",
    projectId: "accountsmodule",
    storageBucket: "accountsmodule.appspot.com",
    messagingSenderId: "224144708229",
    appId: "1:224144708229:web:3c983598cd6571fd8a4fec",
    measurementId: "G-282FDBCTY5"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// export const database = firebase.database();

export default firebase;
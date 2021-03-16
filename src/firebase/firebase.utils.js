import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDwZqB9W-rL6FsRnH8Zl3SbNAzsKHAJoIc",
  authDomain: "crw-db-fe7c8.firebaseapp.com",
  projectId: "crw-db-fe7c8",
  storageBucket: "crw-db-fe7c8.appspot.com",
  messagingSenderId: "734909982301",
  appId: "1:734909982301:web:d4da8852b3c10f9424cfb4",
  measurementId: "G-0ZJKNZPX56",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

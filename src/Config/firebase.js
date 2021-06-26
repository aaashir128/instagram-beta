import React from "react";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1PVNLA-tuilZAfWGb3wcFrMGTMMM4AUw",
  authDomain: "instagram-beta-ba9c4.firebaseapp.com",
  projectId: "instagram-beta-ba9c4",
  storageBucket: "instagram-beta-ba9c4.appspot.com",
  messagingSenderId: "66195767186",
  appId: "1:66195767186:web:0874a2910b39becf9b4b4b",
  measurementId: "G-6G18L7J3MJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

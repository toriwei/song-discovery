// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyAImYGu66G2iqNcptxa0TgbPXWxUfn5l2I",
  authDomain: "song-discovery.firebaseapp.com",
  projectId: "song-discovery",
  storageBucket: "song-discovery.appspot.com",
  messagingSenderId: "888309001142",
  appId: "1:888309001142:web:10dbc97678eac2fd4e2f17",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

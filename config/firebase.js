
// backend/firebase.js
require("dotenv").config();
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});

module.exports = admin;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBpte_KKLQiH6XUiQL3PgdJu-CRSrdlQL8",
//   authDomain: "student-crud-app-4cfb9.firebaseapp.com",
//   projectId: "student-crud-app-4cfb9",
//   storageBucket: "student-crud-app-4cfb9.firebasestorage.app",
//   messagingSenderId: "397071815106",
//   appId: "1:397071815106:web:448b954b25ce480cb3c65b",
//   measurementId: "G-QQZF42X61P"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

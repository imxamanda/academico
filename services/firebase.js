// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";

let app
try{
  app = getAdd()
} catch (error){



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API_KEY",
  authDomain: "process.env.FIREBASE_AUTH_DOMAIN",
  databaseURL: "process.env.FIREBASE_DB_URL",
  projectId: "process.env.FIREBASE_PROJECT_ID",
  storageBucket: "process.env.FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "process.env.FIREBASE_SENDER_ID",
  appId: "process.env.FIREBASE_APP_ID",
  measurementId: "process.env.FIREBASE_MEASUREMENT_ID"
};

 // Initialize Firebase
 app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
}

const db = getDatabase(app)

export { db }
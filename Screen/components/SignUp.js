import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyD5SFt5LnV-s50_FpCFUNf1Hzn34S6OLyQ",
  authDomain: "project-2eca7.firebaseapp.com",
  projectId: "project-2eca7",
  storageBucket: "project-2eca7.appspot.com",
  messagingSenderId: "177967359888",
  appId: "1:177967359888:web:768ef87357f38622d73515",
  measurementId: "G-5LC4WLYRTL"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase}
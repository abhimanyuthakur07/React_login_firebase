import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAYBEXbCIQAX5z6-I9SJP7kvPebL-ikU7A",
    authDomain: "react-login-c16ad.firebaseapp.com",
    databaseURL: "https://react-login-c16ad.firebaseio.com",
    projectId: "react-login-c16ad",
    storageBucket: "react-login-c16ad.appspot.com",
    messagingSenderId: "972550635353",
    appId: "1:972550635353:web:44ca044bbdd208c7255648"
    };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);

export default fire;
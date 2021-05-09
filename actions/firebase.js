
import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  authDomain: 'systemize-66084.firebaseapp.com',
  databaseURL: 'https://systemize-66084-default-rtdb.firebaseio.com/',
  projectId: 'systemize-66084',
  storageBucket: 'systemize-66084.appspot.com'
};
firebase.initializeApp(firebaseConfig);

export const createUser = (username, name, level, bio, occupation) => {
    firebase
    .database()
    .ref('users/' + username)
    .set({
      name: name,
      bio: bio,
      occupation: occupation,
      level: level,
      tasks: []
    });
    
}

export const addTask = (task) => {
  firebase
  .database()
  .ref('users/' + "GbLPX3mJi07qFGIauLKw")
  .set(); 
}

export const getUser = (username) => {
  let value;
  firebase
  .database()
  .ref('users/' + username).on('value', (snap) => {
    value = snap.val()
  })
  return value;
  // .get(); 
} 
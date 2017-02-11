import firebase from "firebase/app";
import "firebase/database";
import config from "./config";

// Firebase Configuration
let FireConfig = {
  apiKey: config.Key,
  authDomain: config.Domain,
  databaseURL: config.DB,
  storageBucket: config.Storage,
};

// Initialize Our Firebase Connection
firebase.initializeApp(FireConfig);

function updateFirebase(state) {
  firebase.database().ref('logItem/').set(state.listItems);
}

function getAppState() {
  return firebase.database().ref('logItem/').orderByChild('id').once('value');
}

function getUsers() {
  return firebase.database().ref('user/').orderByChild('id').once('value');
}

export { updateFirebase, getAppState, getUsers }

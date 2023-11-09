import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/functions';

const config = {
  apiKey: 'AIzaSyAB9N12XY5kYavE238PfjCi-ZF-86ZBCgE',
  authDomain: 'expice-5725d.firebaseapp.com',
  projectId: 'expice-5725d',
  storageBucket: 'expice-5725d.appspot.com',
  messagingSenderId: '631973246685',
  appId: '1:631973246685:web:9c354c7f94b92358b40d34',
  measurementId: 'G-VHH5949V0T',
};

if (typeof window !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

const authFirebase = firebase.auth;

export { authFirebase };

import firebase from 'firebase';

const defaultConfig = {
  apiKey: 'AIzaSyDgc7xJ43feq-r97xq7p48nsK0chzvdZN0',
  authDomain: 'newsie-437a8.firebaseapp.com',
  databaseURL: 'https://newsie-437a8.firebaseio.com',
  projectId: 'newsie-437a8',
  storageBucket: 'newsie-437a8.appspot.com',
  messagingSenderId: '862311969918',
};

class Fire {
  constructor(config = defaultConfig) {
    return firebase.initializeApp(config);
  }
}

export default Fire;

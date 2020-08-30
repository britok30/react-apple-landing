import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyCpTf-cRgqKAwBcYmMkktHWAfxzM9DZCgo',
    authDomain: 'react-apple-e0b18.firebaseapp.com',
    databaseURL: 'https://react-apple-e0b18.firebaseio.com',
    projectId: 'react-apple-e0b18',
    storageBucket: 'react-apple-e0b18.appspot.com',
    messagingSenderId: '540865325136',
    appId: '1:540865325136:web:4c73fe5f332678ea3f0955',
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

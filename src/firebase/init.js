import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDSE5zpDScBNZ_MzC8YMsz4rLAESLHtYTU",
    authDomain: "chat-app-96741.firebaseapp.com",
    projectId: "chat-app-96741",
    storageBucket: "chat-app-96741.appspot.com",
    messagingSenderId: "555552927789",
    appId: "1:555552927789:web:a683ba986e26c9ac6e08a4"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp
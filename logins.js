// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDV0CJQ7a7aGf54w_tE7JtNfvNhIPUJDQ",
  authDomain: "calendar-login-and-signup.firebaseapp.com",
  projectId: "calendar-login-and-signup",
  storageBucket: "calendar-login-and-signup.appspot.com",
  messagingSenderId: "302474131463",
  appId: "1:302474131463:web:3f3a50a068993dd8c212a2D",
  measurementId: "G-CFCQGNP9ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Signup successful:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Signup error:', errorCode, errorMessage);
    });
});

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Login successful:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
    });
});
import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDYQiCI3ukbELZA6DOHdeLpW9ndcLxNyzQ",
    authDomain: "first-product-9b054.firebaseapp.com",
    projectId: "first-product-9b054",
    storageBucket: "first-product-9b054.appspot.com",
    messagingSenderId: "370706587932",
    appId: "1:370706587932:web:db311e2572a970e7d49ad9",
    measurementId: "G-XW09JXRKZL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const button_login = document.getElementById("button-login");


const Login = () => {
  let email = document.getElementById("email").value
  let password = document.getElementById("pass").value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    
    const dt = new Date()
    update(ref(database, 'users/' + user.uid), {
      last_login : dt,
    })

    alert("User Loged in")

    location.replace('../../CartScreen/index.html')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });
}

button_login.addEventListener('click', Login)
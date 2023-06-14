import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyDYQiCI3ukbELZA6DOHdeLpW9ndcLxNyzQ",
    authDomain: "first-product-9b054.firebaseapp.com",
    databaseURL: "https://first-product-9b054-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "first-product-9b054",
    storageBucket: "first-product-9b054.appspot.com",
    messagingSenderId: "370706587932",
    appId: "1:370706587932:web:db311e2572a970e7d49ad9",
    measurementId: "G-XW09JXRKZL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

const value_email = document.getElementById("email");
const value_password = document.getElementById("pass");

const button_login = document.getElementById("button-login");

const onLogin = () => {
    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let email = value_email.value
    let password = value_password.value

    createUserWithEmailAndPassword(auth, email, password)
    .then((success) => {
        const user = success.user
        console.log(user.uid)
        
        set(ref(database, 'users/' + user.uid), {
            Firstname: FirstName, 
            Lastname: LastName,
            email: email
        })

        alert("Register Successful")
    })

    .catch((error) => {
      console.log(error);
      const errorMessage = error.message;
      alert(errorMessage);
    });
};


const EyePos = document.getElementById("eyes")
const First = document.getElementById("first")
const Last = document.getElementById("last")


function ShowPass(){
    const InputType = document.querySelector("#pass");
    const Eye = document.querySelector("#eyes");

    const eyeclose = document.createElement("img");
    eyeclose.src = "../../../assets/icon/Line 130.svg";

    if(InputType.getAttribute("type") == "password"){
        InputType.setAttribute("type", "text");
        Eye.appendChild(eyeclose);
    }else{
        InputType.setAttribute("type", "password");
        Eye.innerHTML = ''
    }
}


function check(){
    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let ErrorText = ""

    if(FirstName == ''){
        ErrorText = "Missing Input"
        First.innerHTML = ErrorText
        EyePos.style.top = '58%'
        return
    }else{
        First.innerHTML = ''
        EyePos.style.top = '55.3%'
    }

    if(LastName == ''){
        ErrorText = `Missing Input`
        Last.innerHTML = ErrorText
        EyePos.style.top = '58%'
        return
    }else{
        Last.innerHTML = ''
        EyePos.style.top = '55.3%'
    }

    onLogin()
}

button_login.addEventListener('click', check)
EyePos.addEventListener('click', ShowPass)
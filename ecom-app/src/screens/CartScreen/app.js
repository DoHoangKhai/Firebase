
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
  
  import { getFirestore, getDocs, collection} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

const LogOut = document.getElementById("logout")
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

const database = getDatabase(app);
const db = getFirestore(app);

const listProduct = collection(db, "product")

const getDataProduct = async () => {
    try{
        const data = await getDocs(listProduct);
        let response =  data.docs.map((item) => item.data());
        console.log(response);

        const productsContainer = document.getElementById("product-box");

        response.map((item) => {
          const card = document.createElement("div");
          card.classList.add("product-card")

          const nameProduct = document.createElement("h5")
          nameProduct.innerText = item.name

          const cost = document.createElement("p")
          cost.innerText = item.price

          card.appendChild(nameProduct)
          card.appendChild(cost)

          productsContainer.appendChild(card)
        })
        
    } catch (error) {
        console.error("Error occure", error);
        throw error;
    }
};

getDataProduct();
console.log(database)

LogOut.addEventListener('click', () => {
  location.replace('../auth/SignIN/index.html')
})
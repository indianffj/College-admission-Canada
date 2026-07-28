// Firebase Configuration


import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import { getFirestore }
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// Replace this with your Firebase details


const firebaseConfig = {


apiKey: "YOUR_API_KEY",

authDomain: "YOUR_AUTH_DOMAIN",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_STORAGE_BUCKET",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"


};



// Initialize Firebase


const app = initializeApp(firebaseConfig);


// Database

const db = getFirestore(app);


export {db};

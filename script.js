import { db } from "./firebase.js";


import {

collection,

addDoc

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";




const form = document.getElementById("admissionForm");



form.addEventListener(

"submit",

async function(event){


event.preventDefault();



let applicationID =

"CAH" +

Math.floor(

100000 +

Math.random()*900000

);




let student = {


applicationID:applicationID,


name:

document.querySelector(
'input[placeholder="Full Name"]'
).value,


email:

document.querySelector(
'input[placeholder="Email Address"]'
).value,


phone:

document.querySelector(
'input[placeholder="Phone Number"]'
).value,


whatsapp:

document.querySelector(
'input[placeholder="WhatsApp Number"]'
).value,


qualification:

document.querySelector(
'input[placeholder="Highest Qualification"]'
).value,


english:

document.querySelector(
'input[placeholder="IELTS / PTE Score"]'
).value,


status:"Under Review",


date:
new Date()

};




try{


await addDoc(

collection(db,"applications"),

student

);



alert(

"Application Submitted Successfully!\n\n"+

"Application ID: "+

applicationID+

"\n\nYou will receive eligibility result within 5 business days."

);



form.reset();


}

catch(error){


alert(

"Error submitting application"

);


console.log(error);


}



});

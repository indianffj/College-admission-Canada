// ===============================
// CANADA ADMISSION HUB
// JAVASCRIPT
// ===============================


// Get Form

const form = document.getElementById("admissionForm");


// When student submits form

form.addEventListener("submit", function(event){

    event.preventDefault();


    // Generate Application ID

    let applicationID = 
    "CAH" + Math.floor(100000 + Math.random() * 900000);



    // Collect student information

    let studentData = {


        applicationID: applicationID,

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


        submittedDate:
        new Date().toLocaleDateString()

    };



    // Save application temporarily

    localStorage.setItem(

        applicationID,

        JSON.stringify(studentData)

    );



    // Show success message


    alert(

    "Application Submitted Successfully!\n\n" +

    "Your Application ID: " +

    applicationID +

    "\n\nOur team will review your documents and update your eligibility status within 5 business days."

    );



    // Clear form

    form.reset();



});





// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


anchor.addEventListener(
"click",
function(e){


e.preventDefault();


document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


});


});





// ===============================
// WEBSITE LOADING MESSAGE
// ===============================


window.onload=function(){


console.log(

"Canada Admission Hub Website Loaded"

);


};

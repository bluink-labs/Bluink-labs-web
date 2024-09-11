
var modal = document.getElementById("meetingModal");

var btn = document.getElementById("contactus-meeting");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*'
meeting email
var modal = document.getElementById("meetingModal");
var btn = document.getElementById("contactus-meeting");
var span = document.getElementsByClassName("close")[0];
var requestButton = document.getElementById("requestmeeting");
var emailField = document.getElementById("email-contactus");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

requestButton.onclick = function() {
    var userEmail = emailField.value;

    if (userEmail) {
        Email.send({
            SecureToken: "e254c666-8491-439b-8fe5-70c444e5f656",
            To: userEmail,
            From: "hello@bluinklabs.com",
            Subject: "Meeting Request",
            Body: "Thank you for requesting a meeting with Bluink Labs. We will get back to you shortly."
        })
        .then(function(response) {
            console.log('Success:', response);
            alert('Your request has been sent successfully!');
            modal.style.display = "none"; // Hide the modal after sending the email
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to send the email. Please try again.');
        });
    } else {
        alert('Please enter a valid email address.');
    }
}
*/

//routes
document.getElementById("Home-footer").onclick = function(){
    window.location.href = "index.html";
};
document.getElementById("products-footer").onclick = function(){
    window.location.href = "products.html";
};
document.getElementById("media-footer").onclick = function(){
    window.location.href = "media.html";
};
document.getElementById("developers-footer").onclick = function(){
    window.open("https://bluink-labs.gitbook.io/bluink-labs-developer-docs","_blank");
};
document.getElementById("whitepaper-footer").onclick = function(){
    window.open("/docs/whitepaper.pdf","_blank");
};
document.getElementById("contactus-footer").onclick = function(){
    window.location.href = "contactus.html";
};
document.getElementById("signup").onclick = function(){
    window.location.href = "newsletter-signup.html";
};
document.getElementById("linkedin").onclick = function() {
    window.open("https://www.linkedin.com/company/bluink-labs", "_blank");
};
document.getElementById("github").onclick = function() {
    window.open("", "_blank");
};
document.getElementById("x").onclick = function() {
    window.open("https://x.com/bluink_labs", "_blank");
};
document.getElementById("instagram").onclick = function() {
    window.open("https://www.instagram.com/bluink_labs/","_blank");
};
document.getElementById("developers-footer").onclick = function(){
    window.open("https://bluink-labs.gitbook.io/bluink-labs-developer-docs","_blank");
};

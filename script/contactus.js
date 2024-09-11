
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
//meeting email
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

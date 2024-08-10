document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been received.`);
    
    // You can add further logic to handle the form submission here
    // For example, send the form data to a server
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("flagModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Open the modal when the page loads
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("flagModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Open the modal when the page loads
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


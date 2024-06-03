document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            // You can add code here to send the form data to your server
            form.reset();
        }
    });

    function validateForm() {
        let valid = true;

        // Check first name
        const firstName = document.getElementById('firstName');
        if (firstName.value.trim() === '') {
            valid = false;
            alert('First name is required.');
        }

        // Check last name
        const lastName = document.getElementById('lastName');
        if (lastName.value.trim() === '') {
            valid = false;
            alert('Last name is required.');
        }

        // Check email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            valid = false;
            alert('Please enter a valid email address.');
        }

        // Check query type
        const queryType = document.querySelector('input[name="queryType"]:checked');
        if (!queryType) {
            valid = false;
            alert('Please select a query type.');
        }

        // Check message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            valid = false;
            alert('Message is required.');
        }

        // Check consent
        const consent = document.getElementById('consent');
        if (!consent.checked) {
            valid = false;
            alert('You must consent to be contacted by the team.');
        }

        return valid;
    }
});

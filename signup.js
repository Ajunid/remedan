document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('response-message');

    if (name && email && phone && message) {
        responseMessage.textContent = 'Thank you for your message, ' + name + '!Tajura properties will get back to you as they get your message and wait patently.';
        responseMessage.textContent = 'Thank you for your message, ' + email + '!Tajura properties will get back to you as they get your message and wait patently.';
        responseMessage.textContent = 'Thank you for your message, ' + phone + '!Tajura properties will get back to you as they get your message and wait patently.';
        responseMessage.style.color = 'black';
        document.getElementById('contact-form').reset();
        document.getElementById('contact-form').page();
    } else {
        responseMessage.textContent = 'Please enter in all fields.';
        responseMessage.style.color = 'red';
    }
});

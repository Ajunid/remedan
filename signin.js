 
 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

const form = document.querySelector('form'); 
const nameInput = document.getElementById('name'); 
const messageInput = document.getElementById('message'); 

form.addEventListener('submit', (event) => {
event.preventDefault();

if (validateForm()) {

console.log('Form submitted successfully');
displayConfirmation();
form.reset(); 
}
});

function validateForm() {
let isValid = true;
if (!nameInput.value.trim()) {
alert('Please enter your name.');
isValid = false;
}

const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!emailPattern.test(emailInput.value.trim("this email addres is invalid"))) {
alert('Please enter a valid email address.');
isValid = false;
}

if (!messageInput.value.trim()) {
alert('Please enter a message.');
isValid = false;
}
return isValid; 
}
function displayConfirmation() {
const confirmationMessage = document.createElement('div');
confirmationMessage.style.backgroundColor = '#d4edda';
confirmationMessage.style.color = '#155724';
confirmationMessage.style.padding = '10px';
confirmationMessage.style.border = '1px solid #c3e6cb';
confirmationMessage.innerText = 'Your message has been sent successfully!';
document.body.insertBefore(confirmationMessage, form);

setTimeout(() => {
confirmationMessage.remove();
}, 5000);
}



    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('response-message');

    if (name && email && phone && message) {
        responseMessage.textContent = 'Thank you for your message, ' + name + '!Tajura properties will get back to you as they get your message and wait patently.';
        responseMessage.textContent = 'Thank you for your message, ' + email + '!Tajura properties will get back to you as they get your message and wait patently.';
        responseMessage.textContent = 'Thank you for your message, ' + phone + '!Tajura properties will get back to you as they get your message and wait patently.';
        responseMessage.style.color = 'green';
        document.getElementById('contact-form').reset();
        document.getElementById('contact-form').page();
    } else {
        responseMessage.textContent = 'Please enter in all fields.';
        responseMessage.style.color = 'red';
    }
});
document.addEventListener('DOMContentLoaded', () => {
   const contactForm = document.querySelector('.contact-form');
 
   console.log(document.querySelector('.contact-form'));

   // Input elements of form
   let userName = document.getElementById('name');
   let email = document.getElementById('email');
   let subject = document.getElementById('subject');
   let message = document.getElementById('message');
 
   if (contactForm && userName && email && subject && message) {
     contactForm.addEventListener('submit', (e) => {
       e.preventDefault();
 
       let formData = {
         name: userName.value,
         email: email.value,
         subject: subject.value,
         message: message.value,
       };
 
       let xhr = new XMLHttpRequest();
       xhr.open('POST', '/');
       xhr.setRequestHeader('content-type', 'application/json');
       xhr.onload = function() {
         console.log(xhr.responseText);
         if (xhr.responseText === 'success') {
           alert('Email sent');
           userName.value = '';
           email.value = '';
           subject.value = '';
           message.value = '';
         } else {
           alert('Something went wrong!');
         }
       };
 
       xhr.send(JSON.stringify(formData));
     });
   } else {
     console.error('One or more form elements are null.');
   }
 });
 
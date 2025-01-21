const scriptURL = 'Your Google App Script URL'; // Replace with your actual URL

const form = document.forms['contact-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      alert('Thank you! Your form has been submitted.');
      form.reset(); // Reset the form after submission
    })
    .catch((error) => console.error('Error!', error.message));
});

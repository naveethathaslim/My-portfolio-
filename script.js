// 1. Smooth Scrolling for Navigation
const links = document.querySelectorAll('#navbar a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get the section id
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// 2. Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
  } else {
    // Form is valid, display a success message
    alert("Thank you for your message! I will get back to you shortly.");
    // Optionally, clear the form
    document.getElementById('contact-form').reset();
  }
});

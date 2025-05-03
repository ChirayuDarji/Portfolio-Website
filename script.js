document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
  });

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      this.setAttribute('aria-expanded', this.classList.contains('active'));
    });
    
    // Close menu when clicking on a link (optional)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        if (navLinks.classList.contains('active')) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });
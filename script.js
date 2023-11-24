// Get references to the elements
const aboutLink = document.getElementById('about-link');
const aboutSection = document.getElementById('about-section');

// Add a click event listener to the "About Us" link
aboutLink.addEventListener('click', () => {
  // Toggle the "hidden" class to show/hide the content
  aboutSection.classList.toggle('hidden');
});

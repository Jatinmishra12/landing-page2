function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for signing up!');
    this.reset(); // Reset the form fields
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function enroll(courseName) {
    alert(`You have enrolled in "${courseName}"`);
}

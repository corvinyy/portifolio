// Navigation active link handling

const navLinks = document.querySelectorAll('nav ul a');
document.getElementById('nav-home').classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});



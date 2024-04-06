//navbar scroll function
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        document.getElementById('titler').classList.add('title-scrolled');
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
        document.getElementById('titler').classList.remove('title-scrolled');
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('transparent-on-scroll');
    } else {
        navbar.classList.remove('transparent-on-scroll');
    }
});

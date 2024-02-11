document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('.navbar-nav');

    toggleBtn.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const burgerMenuBtn = document.getElementById('burgerMenuBtn');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            header.classList.remove('visible');
        } else {
            header.classList.add('visible');
        }
        lastScrollY = window.scrollY;
    });
});
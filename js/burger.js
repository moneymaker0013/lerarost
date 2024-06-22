document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.getElementById('burgerMenuBtn');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    burgerMenuBtn.addEventListener('click', function() {
        fullscreenMenu.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', function() {
        fullscreenMenu.classList.remove('active');
    });
});

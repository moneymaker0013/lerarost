document.addEventListener('DOMContentLoaded', function() {
    const footerBlocks = document.querySelectorAll('.row_footer_block');
    footerBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const activeMenu = document.querySelector('.menu_footer.active');
            const menu = this.querySelector('.menu_footer');
            if (activeMenu && activeMenu !== menu) {
                activeMenu.classList.remove('active');
            }
            menu.classList.toggle('active');
        });
    });
});
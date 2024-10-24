// header
document.addEventListener('DOMContentLoaded', function() {
    const productLink = document.getElementById('product-link');
    const productSubmenu = document.getElementById('product-submenu');

    productLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (productSubmenu.style.display === 'none') {
            productSubmenu.style.display = 'flex';
        } else {
            productSubmenu.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.relative')) {
            productSubmenu.style.display = 'none';
        }
    });
});
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const menuItems = [...document.querySelectorAll('.nav__item')];
        const menuItemAnchors = [...document.querySelectorAll('.nav__item a')];

        document.querySelector(`[href="${window.document.location.pathname}"]`).classList.add('active');

        menuItems.forEach((menuItem) => {
            menuItem.addEventListener('click', (evt) => {
                menuItemAnchors.forEach((anchor) => anchor.classList.remove('active'));
                document.querySelector(`[href="${evt.target.dataset.show}"]`).classList.add('active');
            });
        });
    });
})();
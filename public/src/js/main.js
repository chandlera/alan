document.addEventListener('DOMContentLoaded', () => {
    let menuAnchor = document.querySelectorAll('[data-action=menu-click]');

    menuAnchor[0].onclick = () => {
        let menu = document.getElementsByClassName('side-menu')[0];
        menu.className = menu.className.indexOf('active') !== -1 ? menu.className.replace( /(?:^|\s)active(?!\S)/ , '' ) : menu.className + ' active';
        return false;
    };
});

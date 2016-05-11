let menuClick = () => {
    // Menu click code
    const menuAnchor = [...document.querySelectorAll('[data-action=menu-click]')][0];
    // let menuAnchor = document.querySelectorAll('[data-action=menu-click]');
    menuAnchor.onclick = () => {
        let menu = document.getElementsByClassName('side-menu')[0];
        menu.className = menu.className.indexOf('active') !== -1 ? menu.className.replace( /(?:^|\s)active(?!\S)/ , '' ) : menu.className + ' active';
        return false;
    };
};

let activeMenu = () => {
  const menu = document.getElementsByClassName('nav-menu')[0];
  const activeMenuItem = menu.dataset.active;
  const menuItems = Array.prototype.slice.call(document.getElementsByClassName('nav__item'));

  menuItems.forEach(function(item) {
    item.childNodes[0].textContent === activeMenuItem ? item.className = item.className + ' active' : item.className = item.className.replace('active', '');
  });
};


document.addEventListener('DOMContentLoaded', () => {
    menuClick();
    // svgCode();
    activeMenu();
});

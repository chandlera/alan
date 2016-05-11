'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var menuClick = function menuClick() {
    // Menu click code
    var menuAnchor = [].concat(_toConsumableArray(document.querySelectorAll('[data-action=menu-click]')))[0];
    // let menuAnchor = document.querySelectorAll('[data-action=menu-click]');
    menuAnchor.onclick = function () {
        var menu = document.getElementsByClassName('side-menu')[0];
        menu.className = menu.className.indexOf('active') !== -1 ? menu.className.replace(/(?:^|\s)active(?!\S)/, '') : menu.className + ' active';
        return false;
    };
};

var activeMenu = function activeMenu() {
    var menu = document.getElementsByClassName('nav-menu')[0];
    var activeMenuItem = menu.dataset.active;
    var menuItems = Array.prototype.slice.call(document.getElementsByClassName('nav__item'));

    menuItems.forEach(function (item) {
        item.childNodes[0].textContent === activeMenuItem ? item.className = item.className + ' active' : item.className = item.className.replace('active', '');
    });
};

document.addEventListener('DOMContentLoaded', function () {
    menuClick();
    // svgCode();
    activeMenu();
});
'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var menuAnchor = document.querySelectorAll('[data-action=menu-click]');

    menuAnchor[0].onclick = function () {
        var menu = document.getElementsByClassName('side-menu')[0];
        menu.className = menu.className.indexOf('active') !== -1 ? menu.className.replace(/(?:^|\s)active(?!\S)/, '') : menu.className + ' active';
        return false;
    };
});
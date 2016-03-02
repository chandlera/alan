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

var svgCode = function svgCode() {
    // SVG color wheel code
    var $ = window.jQuery;
    var svgContainer = document.getElementById('svg');
    var rand = Math.floor(Math.random() * (50 - 1)) + 1;
    for (var i = 1; i < 6; i++) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewbox', '-50 -50 100 100');
        for (var y = 1; y < 6; y++) {
            var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            var randColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            circle.setAttribute('fill', randColor);
            circle.setAttribute('cx', 50);
            circle.setAttribute('cy', 50);
            circle.setAttribute('r', 60 - y * 10);

            svg.appendChild(circle);
        }
        svgContainer.appendChild(svg);
    }

    $.getJSON('https://crossorigin.me/http://www.colourlovers.com/api/palettes/top?format=json&numResults=5&resultOffset=' + rand, function (data) {
        $('#svg svg').each(function (x) {
            $(undefined).find('circle').each(function (y) {
                if (data[x].colors) {
                    $(undefined).attr('fill', '#' + data[x].colors[y]);
                }
            });
        });
    });
};

document.addEventListener('DOMContentLoaded', function () {
    menuClick();
    svgCode();
});
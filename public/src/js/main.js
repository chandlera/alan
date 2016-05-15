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

let svgCode = () => {
    // SVG color wheel code
    let $ = window.jQuery;
    let svgContainer = document.getElementById('svg');
    if(svgContainer) {
      let rand = Math.floor(Math.random() * (50 - 1)) + 1;
      for(var i = 1; i < 6; i++) {
          let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewbox', '-50 -50 100 100');
          for(var y = 1; y < 6; y++) {
              let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              let randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
              circle.setAttribute('fill', randColor);
              circle.setAttribute('cx', 50);
              circle.setAttribute('cy', 50);
              circle.setAttribute('r', 60-(y*10));

              svg.appendChild(circle);
          }
          svgContainer.appendChild(svg);
      }

      $.getJSON('https://crossorigin.me/http://www.colourlovers.com/api/palettes/top?format=json&numResults=5&resultOffset=' + rand, (data) => {
          $('#svg svg').each((x) => {
            $(this)
              .find('circle')
              .each((y) => {
                  if(data[x].colors) {
                      $(this).attr('fill', '#' + data[x].colors[y]);
                  }
              });
          });
      });
    }
};

let getScroll = () => {
 if(window.pageYOffset!= undefined){
  return [pageXOffset, pageYOffset];
 }
 else{
  var sx, sy, d= document, r= d.documentElement, b= d.body;
  sx= r.scrollLeft || b.scrollLeft || 0;
  sy= r.scrollTop || b.scrollTop || 0;
  return [sx, sy];
 }
};

document.addEventListener('DOMContentLoaded', () => {
    menuClick();
    svgCode();
    activeMenu();
    getScroll();
});

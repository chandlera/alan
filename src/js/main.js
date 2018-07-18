import '../scss/styles.scss';
import '../images/cwu.png';
import '../images/favicon.png';
import '../images/intrepid.png';
import '../images/me.png';
import '../images/rainier.png';
import '../images/seattle.png';
import '../images/wizards.svg';

document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  [...document.querySelectorAll('.nav__item')].forEach(menuItem =>
    menuItem
      .querySelector('a')
      .classList.toggle(
        'active',
        menuItem.querySelector('a').pathname === document.location.pathname
      )
  );
});

import './css/styles.css';
import './css/addtional.css';

const but = document.querySelector('.menu-button');
const menu = document.querySelector('.side-menu');
const body = document.querySelector('body');

but.addEventListener('click', () => {
  if (menu.style.left === '-250px' || menu.style.left === '') {
    menu.style.left = '0px';
    body.style.left = '400px';
    but.style.left = '400px';
  } else {
    menu.style.left = '-250px';
    body.style.left = '0px';
    but.style.left = '0px';
  }
});

document.querySelectorAll('.menu-item').forEach((item) => {
  item.addEventListener('click', function () {
    document
      .querySelectorAll('.menu-item')
      .forEach((link) => link.classList.remove('active'));
    this.classList.add('active');

    menu.style.left = '-250px';
    but.style.left = '0px';
    body.style.left = '0px';

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  });
});

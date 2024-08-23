import './css/styles.css';
import './css/addtional.css';
import './css/iconstyles.css';
import htmlIcon from './icons/html.png'; // Import the image
import cssIcon from './icons/css.png'; // Import the image
import c from './icons/c.png'; // Import the image
import js from './icons/js.png'; // Import the image
import python from './icons/python.png'; // Import the image
import java from './icons/java.png'; // Import the image
import me from './icons/me.jpeg';
import todo from './icons/todo.png';
import weather from './icons/weather.png';
import battle from './icons/battleship.png';
document.getElementById('battle').src = battle;
document.getElementById('weather').src = weather;
document.getElementById('todo').src = todo;

document.getElementById('me').src = me;
// Set the image source dynamically
document.getElementById('html-icon').src = htmlIcon;
document.getElementById('css-icon').src = cssIcon;
document.getElementById('js').src = js;
document.getElementById('c').src = c;
document.getElementById('python').src = python;
document.getElementById('java').src = java;

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
    but.style.left = '5px';
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
const more = document.querySelector('.more');

const detailed = document.querySelector('.detailed');
const mee = document.querySelector('.me');
const right = document.querySelector('.right1');
more.addEventListener('click', () => {
  if (detailed.style.right == '-500px' || detailed.style.right == '') {
    detailed.style.right = '0';
    mee.style.left = '-300px';
    detailed.style.opacity = '1';
    but.style.opacity = '0';
    body.style.left = '-800px';
    right.style.opacity = '0';
    body.style.overflow = 'hidden';
  } else {
    detailed.style.right = '-500px';
    body.style.left = '0px';
    mee.style.left = '0px';
    detailed.style.opacity = '0';
    but.style.opacity = '1';
    right.style.opacity = '1';
    body.style.overflow = 'auto';
  }
});
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => {
  slider.style.animationPlayState = 'paused';
  slider.style.opacity = '0.5';
});

slider.addEventListener('mouseout', () => {
  slider.style.animationPlayState = 'running';
  slider.style.opacity = '1';
});

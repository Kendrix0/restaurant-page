import './style.css';
import loadHomepage from './home';
import loadMenu from './menu';
import loadContact from './contact';

const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const contactButton = document.querySelector('.contactButton');

homeButton.onclick = () => {
    if (homeButton.classList.contains('active')) {
        return
    } else {
        homeButton.classList.add('active');
        menuButton.classList.remove('active');
        contactButton.classList.remove('active');
        loadHomepage();
    }
}

menuButton.onclick = () => {
    if (menuButton.classList.contains('active')) {
        return
    } else {
        menuButton.classList.add('active');
        homeButton.classList.remove('active');
        contactButton.classList.remove('active');
        loadMenu();
    }
}

contactButton.onclick = () => {
    if (contactButton.classList.contains('active')) {
        return
    } else {
        contactButton.classList.add('active');
        homeButton.classList.remove('active');
        menuButton.classList.remove('active');
        loadContact();
    }
}

loadHomepage();
const content = document.querySelector('#content');
import bitGlobe from './images/bit_globe.png';

function loadContact() {
    content.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('d-flex','flex-column', 'justify-content-center','align-items-center');
    const header = document.createElement('h1');
    header.classList.add('display-1');
    header.textContent = 'Contact Us!'
    
    const contactInfo = document.createElement('p');
    contactInfo.classList.add('lead');
    contactInfo.innerHTML = 'https://github.com/Kendrix0<br>BTC: bc1qx86r225ccwl3wz8nupxu282d4xr6444j5lmrrz<br>ETC: 0xd0AC46D9c8a376A1F4eE10567c39c1fDE291Ac43';

    const globe = new Image();
    globe.src = bitGlobe;

    container.appendChild(header);
    container.appendChild(contactInfo);
    container.appendChild(globe);
    content.appendChild(container);
}

export default loadContact;
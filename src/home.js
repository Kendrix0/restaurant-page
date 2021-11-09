import bitcoinBanner from './images/bitcoin.png';
import stonks from './images/stonks.jpeg';

const content = document.querySelector('#content');
const homeText = document.createElement('div');

function loadHomepage() {
    content.innerHTML = '';
    homeText.innerHTML = '';
    const banner = new Image();
    banner.src = bitcoinBanner;
    banner.classList.add('img-fluid');
    const meme = new Image();
    meme.src = stonks;
    meme.classList.add('img-fluid');

    const header = document.createElement('h1');
    header.textContent = 'Crypto Cookies!';
    header.classList.add('mt-3','display-1');

    const description = document.createElement('main');
    description.innerHTML = 'For all your crunchy crypto cookie cravings!<br>Buy from the best!<br>Now offering top 150 coins! Just send us an email.'
    description.classList.add('mb-4', 'lead')

    homeText.appendChild(banner);
    homeText.appendChild(header);
    homeText.appendChild(description);
    homeText.appendChild(meme);
    homeText.classList.add('d-flex','flex-column', 'justify-content-center','align-items-center');
    content.appendChild(homeText);
}

export default loadHomepage;
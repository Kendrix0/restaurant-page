import bitcoinBanner from './images/bitcoin.png';
const content = document.querySelector('#content');

function loadHomepage() {
    content.innerHTML = ''
    const banner = new Image();
    banner.src = bitcoinBanner;

    const header = document.createElement('h1');
    header.textContent = 'Crypto Cookies!';

    const description = document.createElement('main');
    description.innerHTML = 'For your your crunchy crypto cookie cravings!<br>Buy from the best!<br>Now offering top 150 coins.'

    content.appendChild(banner)
    content.appendChild(header);
    content.appendChild(description)
}

export default loadHomepage;
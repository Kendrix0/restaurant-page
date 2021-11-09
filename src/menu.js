import usdcIcon from './images/usdc_icon.png';
import bitcoinIcon from './images/bitcoin_icon.png';
import ethereumIcon from './images/ethereum_icon.png';
import moneroIcon from './images/monero_icon.png';
import xlmIcon from './images/xlm_icon.png';
import algorandIcon from './images/algorand_icon.png';

const content = document.querySelector('#content');
const menu = document.createElement('div');
menu.classList.add('container', 'd-flex', 'justify-content-center', 'flex-wrap','gap-3');

function createMenuItem(name, image, description, price, color) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('cardContainer',)
    const menuCard = document.createElement('div');
    menuCard.classList.add('card',`border-${color}`);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card-img');
    const imageFigure = document.createElement('figure');
    imageFigure.classList.add('image');
    const imageIcon = new Image();
    imageIcon.src = image;
    imageIcon.classList.add('mw-100')
    imageFigure.appendChild(imageIcon);
    imageContainer.appendChild(imageFigure);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-body', `bg-${color}`);
    const itemName = document.createElement('p');
    itemName.classList.add('card-title');
    itemName.textContent = name;
    const itemDesc = document.createElement('p');
    itemDesc.classList.add('card-text');
    itemDesc.textContent = description;
    cardContent.appendChild(itemName);
    cardContent.appendChild(itemDesc);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    cardFooter.textContent = price;

    menuCard.appendChild(imageContainer);
    menuCard.appendChild(cardContent);
    menuCard.appendChild(cardFooter);
    menuItem.appendChild(menuCard);
    menu.appendChild(menuItem);
}

function loadMenu() {
    content.innerHTML = '';

    createMenuItem('Bitcoin Brownie', bitcoinIcon, 'Only the edge pieces! Most decentralized.', '$100k', 'warning');
    createMenuItem('Ethereum Eclaire', ethereumIcon, 'Most popular alt-cookie! Expensive delivery.', '$5k', 'primary');
    createMenuItem('Monero Macaron', moneroIcon, 'Nobody will know you broke your diet!', '$100.00', 'dark');
    createMenuItem('Stellar Strudels ', xlmIcon, 'Easy to move around!', '$0.40', 'secondary');
    createMenuItem('Algorand Apple Pie', algorandIcon, 'The recipe will never change!', '$2.00', 'secondary');
    createMenuItem('USDCookie', usdcIcon, 'The price will never change!', '$1.00', 'primary');

    content.appendChild(menu);
}

export default loadMenu;
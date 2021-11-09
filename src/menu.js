import usdcIcon from './images/usdc_icon.png';
const content = document.querySelector('#content');

function createMenuItem(name, image, description, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('cardContainer')
    const menuCard = document.createElement('div');
    menuCard.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card-image');
    const imageFigure = document.createElement('figure');
    imageFigure.classList.add('image','is-128x128');
    const imageIcon = new Image();
    imageIcon.src = image;
    imageFigure.appendChild(imageIcon);
    imageContainer.appendChild(imageFigure);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const itemName = document.createElement('p');
    itemName.classList.add('title', 'is-4');
    itemName.textContent = name;
    const itemDesc = document.createElement('p');
    itemDesc.classList.add('subtitle','is-6');
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
    content.appendChild(menuItem);
}

function loadMenu() {
    content.innerHTML = ''
    createMenuItem('USDCookie', usdcIcon, 'Price will never change!', '$1.00');
}

export default loadMenu;
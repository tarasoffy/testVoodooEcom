import { loadData } from "./loadData.js";
import { pagination } from "./pagination.js";

const cart = document.querySelector('.cart');
const closePurchases = document.querySelector('.close');
const infoService = document.querySelector('.info-service')

cart.onclick = () => {
    document.querySelector('.purchases').classList.remove('hidden')
}

closePurchases.onclick = () => {
    document.querySelector('.purchases').classList.add('hidden')
}

infoService.onclick = () => {
    const infoPopup = document.querySelector('.info-popup');
    const arrowSvg = document.querySelector('.arrow-svg');

    if (infoPopup.classList.contains('hidden')) {
        infoPopup.classList.remove('hidden');
        infoPopup.style.height = '400px';
        infoPopup.style.transition = 'height 0.5s ease';
        arrowSvg.style.transform = 'rotate(180deg)';
    } else {
        infoPopup.style.height = '0px'; 
        arrowSvg.style.transform = 'rotate(0deg)';
        infoPopup.style.transition = 'height 0.5s ease';
        setTimeout(() => {
            infoPopup.classList.add('hidden');
        }, 300); 
    }
}

pagination(1)
loadData(1)

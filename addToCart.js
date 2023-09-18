import { changeTotalPrice } from "./changeTotalPrice.js";
import { removeProductFromCart } from "./removeFromCart.js";
import { updateCounterProductInCart } from "./updateCounterProductInCart.js";

const wrapeprPurchases = document.querySelector('.wrapepr-purchases');

const cart = new Map()

export const addToCartFun = (item) => {
    if(cart.has(item.id)) {
        let currentCounter = cart.get(item.id);
       cart.set(item.id, currentCounter+=1)
       updateCounterProductInCart(item, cart)
       changeTotalPrice('plus', item, currentCounter)
    } else {
        cart.set(item.id, 1)
        changeTotalPrice('plus', item, 1)  
    const wrapper = document.createElement('div');
    const cardInfo = document.createElement('div');
    const cardWrapperImage = document.createElement('div');
    const image = document.createElement('img');
    const cardInfoWrapper = document.createElement('div');
    const productName =  document.createElement('p');   
    const productPrice =  document.createElement('p');
    const wrappertCounter = document.createElement('div');
    const productCounterMinus = document.createElement('p');
    const productCounter =  document.createElement('p');
    const productCounterPlus = document.createElement('p');
    const wrapperDeleteIcon = document.createElement('div');
    const iconDeleteProduct = document.createElement('img');
    

    if(item.images.length) {
        image.src=`${item.images[0].src}`
        
    } else {
        image.alt="Some Wrong"
    }

    if(cart.size) {
        document.querySelector('.counter-purchases').classList.remove('hidden')
        const countPurchases = document.querySelector('.count-purchases')
        countPurchases.textContent = `${cart.size}`
    }

    const productInfoTextStyle = "text-white font-bold text-[14px]"

    wrapper.className="wrapper-product-cart max-w-[364px] h-[74px] flex mt-10"
    cardInfo.className="flex w-full"
    cardWrapperImage.className = "max-w-[74px] max-h-[74px] rounded border"
    cardInfoWrapper.className = "ml-[18px] flex flex-col justify-between"
    productName.className = productInfoTextStyle + " truncate w-52"
    productPrice.className = productInfoTextStyle
    wrappertCounter.className = "flex"
    productCounter.className = productInfoTextStyle + ` counter-${item.id}`
    iconDeleteProduct.className = "cursor-pointer"
    productCounterMinus.className = productInfoTextStyle + " text-center w-[20px] cursor-pointer"
    productCounterPlus.className = productInfoTextStyle + " text-center w-[20px] cursor-pointer"

    productName.textContent = `${item.title}`
    productPrice.textContent = `${item.variants[0].price} KR.`
    productCounterMinus.textContent = '-'
    productCounter.textContent = `${cart.get(item.id)}`
    productCounterPlus.textContent = '+'
    iconDeleteProduct.src = './icons/delete.svg'

    wrapeprPurchases.prepend(wrapper)
    wrapper.appendChild(cardInfo)
    cardInfo.appendChild(cardWrapperImage)
    cardWrapperImage.appendChild(image)
    cardInfo.appendChild(cardInfoWrapper)
    cardInfoWrapper.appendChild(productName)
    cardInfoWrapper.appendChild(productPrice)
    cardInfoWrapper.appendChild(wrappertCounter)
    wrappertCounter.appendChild(productCounterMinus)
    wrappertCounter.appendChild(productCounter)
    wrappertCounter.appendChild(productCounterPlus)
    wrapper.appendChild(wrapperDeleteIcon)
    wrapperDeleteIcon.appendChild(iconDeleteProduct)

    iconDeleteProduct.onclick = () => {
        changeTotalPrice('delete', item, cart.get(item.id))
        removeProductFromCart(wrapper)
        cart.delete(item.id)
        if(cart.size) {
            const countPurchases = document.querySelector('.count-purchases')
            countPurchases.textContent = `${cart.size}`
        } else {
            document.querySelector('.counter-purchases').classList.add('hidden')
        }
    }

    productCounterMinus.onclick = () => {
        let currentCounter = cart.get(item.id)
        if(cart.has(item.id) && currentCounter > 1) {
            cart.set(item.id, currentCounter-1)
            changeTotalPrice('minus', item, currentCounter)
            updateCounterProductInCart(item,cart)
        }
    }

    productCounterPlus.onclick = () => {
        let currentCounter = cart.get(item.id)
        if(cart.has(item.id)) {
            cart.set(item.id, currentCounter+1)
            changeTotalPrice('plus', item, currentCounter)
            updateCounterProductInCart(item,cart)
        }
    }

    }
}



import { addToCartFun } from "./addToCart.js";

const wrapperCards = document.querySelector('.wrapper-cards');


export const createProductCard = (products) => {

    const wrapperCard = document.createElement('div');

    wrapperCard.className="wrapper-card grid grid-cols-4 gap-4 max-lg:grid-cols-3 gap-6 justify-items-center max-md:grid-cols-2 gap-2 justify-items-center max-sm:grid-cols-1"

    wrapperCards.appendChild(wrapperCard)

    products.map(item => {
        const wrapper = document.createElement('div');
        const wrapperImage = document.createElement('div'); 
        const productImage = document.createElement('img')
        const productSource = document.createElement('div'); 
        const textSource = document.createElement('p'); 
        const productInfoWrapper = document.createElement('div'); 
        const productInfoLeftSide = document.createElement('div'); 
        const productName = document.createElement('p'); 
        const productCost = document.createElement('p'); 
        const productInfoRightSide = document.createElement('div'); 
        const productCondition = document.createElement('p'); 
        const condition = document.createElement('p'); 
        const btnAddToCart = document.createElement('button');
    
        wrapper.className="mt-[48px]"
        wrapperImage.className="border border-black  max-h-[300px] max-w-[300px] rounded relative";
        productSource.className="absolute left-5 top-5 rounded flex items-center justify-center w-[47px] h-6 bg-black";
        textSource.className="text-[12px] text-white"
        productInfoWrapper.className="flex justify-between max-w-[300px] mt-3"
        productInfoLeftSide.className="font-bold text-sm"
        productName.className="truncate w-52 max-xl:w-44"
        productInfoRightSide.className="text-right text-sm"
        productCondition.className="font-medium"
        btnAddToCart.className="bg-black rounded w-full max-w-[300px] h-[42px] mt-3 text-white font-bold"
    
        wrapperCard.appendChild(wrapper)
        wrapper.appendChild(wrapperImage)
        if(item.images.length) {
            productImage.src=`${item.images[0].src}`
            
        } else {
            productImage.alt="Some Wrong"
        }
        wrapperImage.appendChild(productImage)
        wrapperImage.appendChild(productSource)
        textSource.textContent = "USED"
        productName.textContent = `${item.title}`
        productCost.textContent = `${item.variants[0].price}`
        productCondition.textContent = "Condition"
        condition.textContent = "Slightly used"
        btnAddToCart.textContent = "ADD TO CART"
        productSource.appendChild(textSource)
        wrapper.appendChild(productInfoWrapper)
        productInfoWrapper.appendChild(productInfoLeftSide)
        productInfoLeftSide.appendChild(productName)
        productInfoLeftSide.appendChild(productCost)
        productInfoWrapper.appendChild(productInfoRightSide)
        productInfoRightSide.appendChild(productCondition)
        productInfoRightSide.appendChild(condition)
        wrapper.appendChild(btnAddToCart)
    
        btnAddToCart.onclick = () => {
            addToCartFun(item)
        }
    })
}
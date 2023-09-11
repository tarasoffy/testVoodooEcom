export const updateCounterProductInCart = (item,cart) => {
    const productCounter = document.querySelector(`.counter-${item.id}`);
    productCounter.textContent = `${cart.get(item.id)}`
}
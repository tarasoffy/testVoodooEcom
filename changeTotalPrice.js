export const changeTotalPrice = (property, item, counter) => {
    const totalPrice = document.querySelector('.total-price');
    const currentTotalPrice = Number(totalPrice.textContent)
    const itemPrice = Number(item.variants[0].price)

    let res;

    if(property === 'plus') {
        res = currentTotalPrice + itemPrice
    }

    if(property === 'minus') {
        res = currentTotalPrice - itemPrice
    }

    if(property === 'delete') {
        res = currentTotalPrice - (itemPrice * counter);
    }

    totalPrice.textContent = res.toFixed(2)
}
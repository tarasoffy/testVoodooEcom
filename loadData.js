import { createProductCard } from "./createProductCard.js";

export const loadData = (page) => {
    fetch(`https://voodoo-sandbox.myshopify.com/products.json?limit=24&page=${page}`).then(res => res.json()).then(data => {

    const products = data.products;

    createProductCard(products)
});
}
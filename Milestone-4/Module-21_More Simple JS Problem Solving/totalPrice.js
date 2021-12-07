
// Calculate the total cost of the products in a shopping cart

const products = [
    {name: `Laptop`, price: 45000,},
    {name: `Shirt`, price: 500},
    {name: `Phone`, price: 55000},
    {name: `Watch`, price: 3000, isStock: false},
]

console.log(products);

let totalPrice = 0;
for (const product of products) {
    //if(!product.isStock) break;
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);

const cart = [
    {name: `Laptop`, price: 45000, quantity: 1},
    {name: `Shirt`, price: 500, quantity: 5},
    {name: `Phone`, price: 55000, quantity: 3},
    {name: `Watch`, price: 300, quantity: 2}
]

let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);

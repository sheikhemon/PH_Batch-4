const friends = ['shafik', 'rafik', 'almin khan', 'fayaj kha'];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    {name: 'bottle', price: 500, color: 'red'},
    {name: 'mobile', price: 1000, color: 'white'},
    {name: 'watch', price: 200, color: 'yellow'},
    {name: 'wallet', price: 300, color: 'blue'},
    {name: 'glass', price: 100, color: 'nevy blue'},
];
const ProductNames = products.map(p => p.name);
const ProductPrices = products.map(p => p.price);
products.map(p => console.log(p));
products.forEach(p => console.log(p));
console.log(ProductNames, ProductPrices);
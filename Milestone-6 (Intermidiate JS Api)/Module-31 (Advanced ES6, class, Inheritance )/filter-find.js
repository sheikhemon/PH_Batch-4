const numbers = [5, 10, 20, 30, 40, 5, 3, 12, 85, 45, 36, 37, 74];
const biggestNumbers = numbers.filter(n => n > 80);
const smallestNumbers = numbers.filter(n => n < 10);
console.log(biggestNumbers, smallestNumbers);

const products = [
    {name: 'bottle', price: 500, color: 'red'},
    {name: 'mobile', price: 1000, color: 'white'},
    {name: 'watch', price: 200, color: 'yellow'},
    {name: 'wallet', price: 300, color: 'blue'},
    {name: 'glass', price: 100, color: 'blue'},
];
// const expensive = products.filter(p => p.price >= 500);
// const expensive = products.filter(p => p.color == 'blue');
const expensive = products.find(p => p.color == 'blue');
console.log(expensive);
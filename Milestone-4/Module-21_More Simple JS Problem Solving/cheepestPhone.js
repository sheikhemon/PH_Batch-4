// Find the cheapest phone from an array of phone objects

const phones = [
    {name: `smasung s5`, price: 45000, camera: 10, storage: 32},
    {name: `walton`, price: 6000, camera: 2, storage: 2},
    {name: `xiomie`, price: 8000, camera: 4, storage: 2},
    {name: `poco`, price: 10000, camera: 6, storage: 4},
    {name: `nokia`, price: 15000, camera: 6, storage: 8},
    {name: `oppo`, price: 25000, camera: 8, storage: 16}
]

function cheapestPrice(phones) {
    let cheapest = phones[0];
        for (const phone of phones) {
        if (phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const minPriceDefine = cheapestPrice(phones);
console.log(minPriceDefine);  
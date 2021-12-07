// javaScript Object Notation
// JSON
const user = { id: 123, name: "aiman", job: 'goribi'}
const stringify = JSON.stringify(user)
console.log('user');

// Regular Object
const shop = {
    name: 'Aila Bhatt',
    address: 'alia road',
    profit: 15000,
    product: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false,
    otherObj: {
        lolz: 'op bolte caddi kholte'
    },
}
const shopSignified = JSON.stringify(shop);
// console.log(shop);
console.log(shopSignified);
const convert = JSON.parse(shopSignified)
console.log(convert.otherObj);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name);
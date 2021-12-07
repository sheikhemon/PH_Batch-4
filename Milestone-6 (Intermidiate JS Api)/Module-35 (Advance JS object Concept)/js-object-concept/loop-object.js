const bottle = {
    color: 'blue',
    hold: 'water',
    price: 100,
    isClean: true,
};
/* 
    for (let i = 0; i < 10; i++){}
    for (const product of products){} -- array 
    for (const prop in bottle) {} -- object
*/
for (const prop in bottle){
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

/* const key = Object.entries(bottle);
console.log(key);
const [key, value] = ['color', 'red'] */
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
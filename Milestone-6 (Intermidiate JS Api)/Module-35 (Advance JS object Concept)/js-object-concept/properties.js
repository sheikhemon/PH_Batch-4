const bottle = {
    color: 'blue',
    hold: 'water',
    price: 100,
    isClean: true,
}
const key = Object.keys(bottle)
const value = Object.values(bottle)
const pair = Object.entries(bottle)
Object.seal(bottle);
Object.freeze(bottle)
delete bottle.isClean;
console.log(bottle);
// 1. Let And Const
const laptop = 'assus';
let mobile = 'iPhone 12';
mobile = 'sumsang';
// 2. Default Parameter and spread or three dots
function arr(array = [0]) {
    const max = Math.max(...array); // - TypeError: array is not iterable (cannot read property 
    return max;
}
const max = (array = [0]) => {
    const newMax = Math.max(...array);
    return newMax;
}
console.log(max());
console.log(arr());
// 3. Template String 
const myNotes = `i want to ${laptop}.
i want to ${mobile}
but i love sumsang mobile`;
console.log(myNotes);

// arrow function
function arrow() {
    return 10;
} 
console.log(arrow());

const arrow = () => 10;
console.log(arrow());
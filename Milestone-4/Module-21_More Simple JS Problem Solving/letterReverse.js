//=== Explore string nature and reverse a string
const ques = `Hello, how are you ?`;
function letterReverse(str) {
    let reverse = ``;
    for (const letter of str) {
        reverse = letter + reverse;
    }
    return reverse;
}
const reverseFinal = letterReverse(ques);
console.log(reverseFinal);
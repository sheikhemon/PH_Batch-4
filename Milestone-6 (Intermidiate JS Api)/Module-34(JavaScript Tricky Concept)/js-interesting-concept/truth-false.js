/* 
    False : Boolean data declare 
    true : Boolean data declare

*/
const x = false;
if (x) {
    console.log("variable is truth");
} else {
    console.log(
        "variable is false"
    );
}
/* 
    Any number positive or negative
    only 0 number called false 
*/
const x = 1;
if (x) {
    console.log("variable is truth");
} else {
    console.log(
        "variable is false"
    );
}
/* 
    String: always true
    Empty string : false , any string including white space called truth 
    if included string any number called truth - "0", "false"
*/
const x = ' ';
if (x) {
    console.log("variable is truth");
} else {
    console.log("variable is false");
}

/* 
    if we are not declare variable data then called - undefined
    empty array/object both ara truth 
*/
let x;
console.log(x);
if (x) {
    console.log("variable is truth");
} else {
    console.log("variable is false");
}
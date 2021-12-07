// var declare 
var time = `10:45pm`
var bookPrice = 150;
var isWhiteColor = false;
// array 
var itemsPrice = [20, 60, 45, 85, 100, 12]
var businessPartner = [`sahafik`, `rafik`, `jabbar`,`kader`, `mafij`];
var elementCount = businessPartner.length;
var elementIndex = businessPartner.indexOf(`rafik`)
var addSomeone = businessPartner.push(`tamal`);
var outSomeone = businessPartner.pop();
// condition 
if (bookPrice < 120) {
    console.log(`I Will buy this book`);
}else{
    console.log(`Give me some discount this book`);
}
// ========== array
var i = 0;
while (i <= 15){
    // do work
    i++;
}
for (i = 0; i <= 15; i++){
    // so something
}
// function
function isMoonUp (time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var moonStastus = isMoonUp(21);
console.log(moonStastus);

// value of variable could change or reassign
let onionPrice = `30`;
onionPrice = `45`;
// value of variable couldn't change 
const myName = `Aiman`;
console.log(myName);
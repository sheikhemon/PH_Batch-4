// var
var items = `red`;
var quantity = 1;
var full = false;

// array
var items = [`bottle`, `mug`, `jug`, `pen`];
var checkIndex = items.indexOf(`jug`);
var pushItems = items.push(`glass`);
var popItems1 = items.pop();

// condition
if (items.length >= 5){
    console.log(`we have to many  stuffs on your desk`);
}
else if (items.length == 5) {
    console.log(`you have only a hell items`);
}
else {
    console.log(`Wow you have a clean desk`);
}
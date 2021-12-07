// parameter with function and part by part debugging

function BringBread(money) {
    console.log(`Given money for bread`, money);
    console.log(`Mama gives bread`);
    var breadPrice = 50;
    var breadQuantity = money / breadPrice;
    return breadQuantity;
}
var totalCost = 200;
var totalBread = BringBread(totalCost);
console.log(totalBread);
// ===========================//
        // Module Summary
//============================//

// while loop
var i = 0;
while (i <= 20) {
    console.log(i);
    i++;
}
// for Loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// array with for loop
var defineArrayWithForLoopNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < defineArrayWithForLoopNumbers.length; i++) {
    var element = defineArrayWithForLoopNumbers[i];
    console.log(element);
}
// array with some items
var foodItems = [`Apple`, `Mango`, `Banana`, `Pineapple`, `Avocado`, `Blueberries`, `Breadfruit`]
for (var i = 0; i < foodItems.length; i++) {
    var ItemsResult = foodItems[i];
    console.log(ItemsResult);
}

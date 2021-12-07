// advance while and for loop break and continue

// while loop
var i = 0;
while (i < 15) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

// for loop
for (var i = 0; i <= 20 ; i++) {
    var element = [i];
    if (i == 5) {
        break; 
    }
}

// with array
var numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 101, 45, 56];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 5) {
        break;
    }
}

// continue with array
var numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 101, 45, 56];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}
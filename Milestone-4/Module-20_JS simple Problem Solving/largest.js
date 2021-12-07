// Find the largest element of an array
function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
const oldest = largestElement([12, 15, 20, 30, 60, 45, 55])
const oldest2 = largestElement([-12, -6, -17])
console.log(oldest);
console.log(oldest2);

// Find the largest element of an array
function smallElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const yong = smallElement([55, 45, 85, 75, 25, 42, 95]);
const yong2 = smallElement([-12, -13, -45, -6, -18])
console.log(yong);
console.log(yong2);
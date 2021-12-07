// const names = [`shafik`, `rafik`, `jabbar`, `tamal`, `kabir` , `shafik` , `jabul`, `rafik`, `jabbar`];

// function removeDuplicate(names) {
//     const unique = [];
//     /* for (let i = 0; i < names.length; i++) {
//         const element = names[i];
//         console.log(element);
//     } */
//     for (const element of names) {
//         console.log(element);
//         if (unique.indexOf(element)) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const totalNames = removeDuplicate(names);
// console.log(totalNames);

const numbers = [15, 25, 65, 12, 45, 45, 25, 65, 15, 12, 45]

function duplicateNumber(numbers) {
    const uniqueNumber = [];
    for (const element of numbers) {
        console.log(element);
        if (uniqueNumber.indexOf(element)) {
            uniqueNumber.push(element);
        }
    }
    return uniqueNumber; 
}
const isUniqueNewNumber = duplicateNumber(numbers);
console.log(isUniqueNewNumber);
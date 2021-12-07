// const checkPositive = [1, 2, 3, 4, 5, 6, -5, 15, 16];

// function positive(numbers) {
//     let positiveArray = [-5];
//     for (let i = 0; i <= numbers.length; i++) {
//         const element = numbers[i];
//         if (positiveArray == element) {
//             positiveArray = positiveArray + element; 
//         }else{
//             break;
//         }
//     }
//     return positiveArray;
// }
// const totalPositive = positive(checkPositive)
// console.log(totalPositive);.


function getPositive(){
    const mythArray = [1, 2, 3, 4, 5, 6, -5, 15, 16];    
    const newArray = [];
    for(let i = 0; i < mythArray.length-1; i++){
        const awesome = mythArray[i];
        if(awesome< 0) break;
        newArray.push(awesome);
    }
    return newArray;
}
console.log(getPositive());
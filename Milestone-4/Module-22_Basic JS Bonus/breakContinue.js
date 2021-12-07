// const products = [
//     { name: `samsung s3 phone`, price: 12000},
//     { name: `samsung s2 phone`, price: 11000},
//     { name: `watch`, price: 10000},
//     { name: `laptop`, price: 7000},
//     { name: `ear dot`, price: 5000}
// ];
// // for (const product of products) {
// //     if (product.price < 10000) {
// //         break;
// //     }
// //     console.log(product);
// // }
// for (const product of products) {
//     if (product.price < 10000) {
//         continue; //break
//     }
//     console.log(product);
// }

function sellReward(customer) {
    const sell = 0;
    if (sell >= 15) {
        return `please sell my reward`
    } else{
        return `Please give me full marks Programming Hero`
    }
}
sellReward(10);
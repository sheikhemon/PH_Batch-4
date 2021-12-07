const product = [
    { name: `samsung s3 phone`, price: 12000},
    { name: `samsung s2 phone`, price: 11000},
    { name: `watch`, price: 10000},
    { name: `laptop`, price: 7000},
    { name: `ear dot`, price: 5000}
]
function searchProducts(products, searchText) {
    const match = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1){
            match.push(product)
        }
    }
    return match;
}
console.log(searchProducts(product, `phone`));
// some array
const products = [
    'Best PC Laptop: HP Envy x360 (13-inch) laptop',
    'HP Envy 13 PC Laptop',
    'Apple MacBook Pro with M1 Chip (13-inch) laptop',
    'Apple ROG Flow X13 GV301QE Gaming Laptop',
    'Service Tag placed on the bottom of your laptop',
    'Vivo Y53s Full Specifications phone',
    'Apple Hot 10S Full Specifications phone',
    'Apple Mi 11 Lite Full Specifications',
];
const searching = 'laptop';
// indexOf
const output = [];
for ( const product of products) {
    if ( product.toLowerCase().indexOf (searching.toLowerCase()) != -1 ) {
        output.push(product);
    }
};
console.log(output);

// another way to same - includes
const searching = 'laptop';
const output = [];
for ( const product of products ) {
    if ( product.toLowerCase().includes(searching.toLowerCase()) ) {
        // output.push(product);
    }
}
console.log(output);

// start with
const searching = 'apple';
const output = [];
for (const product of products){
    if (product.toLowerCase().startsWith (searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);

// end with
const searching = 'laptop';
const output = [];
for (const product of products){
    if (product.toLowerCase().endsWith (searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);

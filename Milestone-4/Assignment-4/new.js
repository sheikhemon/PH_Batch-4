function deliveryCost(shirtDelivery) {
    /* if (typeof shirtDelivery != `number`) {
        return `Please provide a positive number`
    } */
    const firstPerShirt = 100;
    const secondPerShirt = 80;  /* 100 shirt er dam jodi per pis 100 taka kore hoy tahole 100 shirt er dam koto 100 * 100 */
    const ThirdPerShirt = 50;
    /* Delivery charge of 0 to 100 per shirt */
    if (shirtDelivery <= 100) {
        const shirtCost = shirtDelivery * firstPerShirt;
        // return shirtCost;
        console.log(shirtCost);
        /* Delivery charge of 101 to 200 per shirt */
    } else if (shirtDelivery <= 200) { /* 100 * 80 quantity- 100 + 100 */ /* 100  100 theke 200 */
        const firstShirtCost = 100 * firstPerShirt; /* 100 * 100 */
        const restCost = shirtDelivery - 100;
        const secondShirtCost = restCost * secondPerShirt;
        const secondShirtTotalCost = firstShirtCost + secondShirtCost;
        // return secondShirtTotalCost;
        console.log(secondShirtTotalCost);
        /* Delivery charge of 201 to infinite per shirt */
    } else {
        const firstShirtCost = 100 * firstPerShirt;
        const secondShirtCost = 100 * secondPerShirt;
        const restCost = shirtDelivery - 200;
        const thirdShirtCost = restCost * ThirdPerShirt;
        const thirdShirtTotalCost = firstShirtCost + secondShirtCost + thirdShirtCost;
        // return thirdShirtTotalCost;
        console.log(thirdShirtTotalCost);
    }
}
console.log(deliveryCost());
// 
function updateProductNumber(product, price, increaseNumber) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (increaseNumber) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total value 
    const productTotalValue = document.getElementById(product + '-total');
    productTotalValue.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// total all amount 
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update total value
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// phone event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// case event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})


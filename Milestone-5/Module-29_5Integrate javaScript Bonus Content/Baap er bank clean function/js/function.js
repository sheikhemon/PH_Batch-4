function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function getInnerTextValue(fieldId) {
    const fieldValue = document.getElementById(fieldId);
    const fieldValueInText = fieldValue.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateTotal(fieldId, amount) {
    const previous = getInnerTextValue(fieldId);
    const newTotalAmount = previous + amount;
    document.getElementById(fieldId).innerText = newTotalAmount
    return newTotalAmount;
}
function updateBalance(amount, isAdding) {
    const previousBalanceInText = getInnerTextValue('add-total-balance')
    let newTotalBalance;
    if (isAdding == true) {
        newTotalBalance = previousBalanceInText + amount;
    } else {
        newTotalBalance = previousBalanceInText - amount;
    }
    document.getElementById('add-total-balance').innerText = newTotalBalance;
}
// deposit add
document.getElementById('btn-deposit').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('add-deposit', amount)
        updateBalance(amount, true)
    } else {
        alert `please provide your correct value`
    }
})
// handle withdraw 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('add-total-balance')
    if ( amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false)
    } else {
        alert `please provide your correct value`
    }
})
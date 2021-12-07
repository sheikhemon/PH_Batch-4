function getInputField(input) {
    const inputFiled = document.getElementById(input);
    const inputText = inputFiled.value;
    const inputValue = parseFloat(inputText);
    inputFiled.value = '';
    return inputValue;
}
function getAddTotalField (totalAddAmount, amount) {
    const addTotal = document.getElementById(totalAddAmount);
    const addTotalText = addTotal.innerText;
    addTotal.innerText = parseFloat(addTotalText) + amount;
}
function getCurrentBalance() {
    const mainBalance = document.getElementById('add-total-balance');
    const balanceText = parseFloat(mainBalance.innerText);
    return balanceText;
}
function getTotalBalance (amount, isAdd) {
    const mainBalance = document.getElementById('add-total-balance');
    const balanceText = getCurrentBalance();
    if (isAdd == true) {
        mainBalance.innerText = balanceText + amount;
    } else {
        mainBalance.innerText = balanceText - amount;
    }
}
// deposit function
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositValue = getInputField('deposit-input');
    if (depositValue > 0) {
        getAddTotalField('add-deposit', depositValue)
        getTotalBalance(depositValue, true);   
    } else {
        alert(`Please enter your valid value`)
    }
});
// Withdraw function 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawValue = getInputField('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawValue > 0 && withdrawValue < currentBalance) {
        getAddTotalField('withdraw-total', withdrawValue)
        getTotalBalance(withdrawValue, false)    
    }else {
        alert(`You can't keep zero money`) 
    }  
})
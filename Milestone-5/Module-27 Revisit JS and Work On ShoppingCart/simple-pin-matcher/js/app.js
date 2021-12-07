function getPin () {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log(`got 3 digit`);
        return getPin();
    }
}
// event delegate and bubble 
function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById('generate-input').value = pin;
}
document.getElementById('calc-btn').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }

    } else {
        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }
});

// submit 
function verifyPin() {
    const generateInput = document.getElementById('generate-input').value;
    const calcInput = document.getElementById('calc-input').value;
    const successMessage = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-fail');
    if (generateInput ==  calcInput) {
        successMessage.style.display = 'block';
        notifyError.style.display = 'none'
    } else {
        successMessage.style.display = 'none';
        notifyError.style.display = 'block'
    }
}
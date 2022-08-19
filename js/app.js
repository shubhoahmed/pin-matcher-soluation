function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const buttonValue = event.target.innerText;
    const displayNumberField = document.getElementById('typed-number');
    const previousTypedNumber = displayNumberField.value;

    if (isNaN(buttonValue)) {
        if (buttonValue === 'C') {
            displayNumberField.value = '';
        }
        else if (buttonValue === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainDigit = digit.join('');
            displayNumberField.value = remainDigit;
        }
    }
    else {
        const newTypeNumber = previousTypedNumber + buttonValue;
        displayNumberField.value = newTypeNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const displayNumberField = document.getElementById('typed-number');
    const displayNumber = displayNumberField.value;

    const pinSuccessMassage = document.getElementById('success');
    const pinFailMassage = document.getElementById('fail');
    if (currentPin == displayNumber) {

        pinSuccessMassage.style.display = 'block';
        pinFailMassage.style.display = 'none';
        displayNumberField.value = '';
    }
    else {

        pinFailMassage.style.display = 'block';
        pinSuccessMassage.style.display = 'none';

    }

})



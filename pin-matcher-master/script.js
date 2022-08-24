function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin-btn').addEventListener('click', function () {


    const getpin = getPin();
    const showPinBox = document.getElementById('show-generate-pin');
    showPinBox.value = getpin
})



document.getElementById('calculator').addEventListener('click', function (event) {

    const number = event.target.innerText;

    const typeNumberField = document.getElementById("typed-number");
    // get previous field input and concatinate given value;
    const previousNumber = typeNumberField.value;


    if (isNaN(number) == true) {
        if (number == 'C') {
            typeNumberField.value = '';
        }
        if (number == '<') {
            const temp = previousNumber.split('');
            temp.pop('')
            const newvalue = temp.join('')

            typeNumberField.value = newvalue
        }
    }
    else {
        // const previousNumber = typeNumberField.value;
        const currentNumber = previousNumber + number;

        // set new value in input.
        typeNumberField.value = currentNumber;
    }
})




document.getElementById("submit-button").addEventListener('click', function () {

    const showPinBox = document.getElementById('show-generate-pin');
    const typeNumberField = document.getElementById("typed-number");

    const showRight = document.getElementById('not-match');
    const showWrong = document.getElementById('match');

    if (showPinBox.value == typeNumberField.value) {


        showRight.style.display = 'block'
        showWrong.style.display = 'none'
    }
    else {

        showRight.style.display = 'none'
        showWrong.style.display = 'block'
    }
})
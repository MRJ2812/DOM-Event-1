document.getElementById('deposite-btn').addEventListener('click', function () {

    ///////////// This is for deposite field  

    // first take value from deposite input field by function.
    const newdepositAmount = getInputValueById('deposite-field');

    // get previous deposite box text by function.
    const previousDepositeTotal = gettextElemntValueById('deposite-show');

    // calculate previous value and current given value.
    const newDepositeTotal = previousDepositeTotal + newdepositAmount;

    // set the new calculate value to the box text (box id, new value)
    setElemntTextValueById('deposite-show', newDepositeTotal);


    ////////// This is for balance field.

    // get previous balance box text by function.
    const previousBalanceTotal = gettextElemntValueById('Balance-show');

    const newBalanceTotal = previousBalanceTotal + newdepositAmount;

    // set the new calculate value to the box text (box id, new value)
    setElemntTextValueById('Balance-show', newBalanceTotal);

})
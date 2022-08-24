document.getElementById('withdraw-btn').addEventListener('click', function () {

    const NEWwithdrawAmount = getInputValueById('withdraw-filed');

    const previouswithdrawTotal = gettextElemntValueById('withdraw-show');

    const previousBalanceTotal = gettextElemntValueById('Balance-show');

    if (parseFloat(NEWwithdrawAmount) > parseFloat(previousBalanceTotal)) {
        alert('Insufficient balance');

    }

    else {
        const currentwithdrawTotal = NEWwithdrawAmount + previouswithdrawTotal;


        setElemntTextValueById('withdraw-show', currentwithdrawTotal);  // ok

        // const previousBalanceTotal = gettextElemntValueById('Balance-show');

        const newBalanceTotal = previousBalanceTotal - NEWwithdrawAmount;

        setElemntTextValueById('Balance-show', newBalanceTotal);
    }









})
//   set event handler in withdraw button.
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // get withdraw input value.
    const given_withdraw = document.getElementById("withdraw-filed");
    const withdrawValue = given_withdraw.value;

    // check if the given value number or not (NaN = Not a number)
    if (isNaN(parseFloat(withdrawValue))) {
        alert("This is not a number, i return the whole funciton for stop.");
        given_withdraw.value = ''              // empty input filed
        return;                                // condition match --> return --> stop whole function.
    }

    // get withdraw box text.
    const withdraw_show = document.getElementById('withdraw-show');
    const withdrawBoxText = withdraw_show.innerText    // as after call input , we take value  from input --> // should also call h1/p tag, must take inner Text


    // take balance box text
    const Balance_show = document.getElementById("Balance-show");
    const balanceBoxText = Balance_show.innerText;


    // check if withdraw request amount is greter than main balance or not.
    if (parseFloat(balanceBoxText) < parseFloat(withdrawValue)) {
        alert("Sorry amount not available");                       // we can also return function for stop without using else.
    }

    else {
        const total_withdraw = parseFloat(withdrawValue) + parseFloat(withdrawBoxText);

        withdraw_show.innerText = total_withdraw;

        const balancevalue = parseFloat(balanceBoxText) - parseFloat(withdrawValue);

        Balance_show.innerText = balancevalue;
    }


    given_withdraw.value = ''





})
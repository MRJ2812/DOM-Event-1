// Add event lisenar in deposite button
const total_deposite = ''
document.getElementById("deposite-btn").addEventListener("click", function () {

    // get amount from deposit input filed
    const depositfiled = document.getElementById("deposite-field");          // input field
    const newdeposite_amount = depositfiled.value;                           // get value.

    // get deposite text field
    const depositetext = document.getElementById("deposite-show");
    const olddepositeamount = depositetext.innerText;                        // text filed inner text.

    const currentDeposite = parseInt(newdeposite_amount) + parseInt(olddepositeamount);   // inner text + givevn deposite value;
    depositetext.innerText = currentDeposite;                                             // set new  deposit text


    ///////////////  change balance box   /////////////////
    const balance = document.getElementById('Balance-show');                  // get balance box
    const oldbalance = balance.innerText;                                    // get text

    const currentbalance = parseInt(newdeposite_amount) + parseInt(oldbalance);
    balance.innerText = currentbalance;                                              // set balance


    // clear deposite filed
    depositfiled.value = ''


})
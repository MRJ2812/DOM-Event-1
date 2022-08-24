
document.getElementById('btn-case-plus').addEventListener('click', function () {

    let updateQuantity = UpdateCaseFunction('case-number-field', true);
    pricechange('casePrice', updateQuantity, 59);

    Subtotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    let updateQuantity = UpdateCaseFunction('case-number-field', false);
    pricechange('casePrice', updateQuantity, 59);

    Subtotal();
})





document.getElementById('phone-btn-plus').addEventListener('click', function () {

    let updateQuantity = UpdateCaseFunction('phone-number-field', true);
    pricechange("PhonePrice", updateQuantity, 1219);

    Subtotal();


})

document.getElementById('phone-btn-minus').addEventListener('click', function () {
    let updateQuantity = UpdateCaseFunction('phone-number-field', false);
    pricechange("PhonePrice", updateQuantity, 1219);


    Subtotal();
})
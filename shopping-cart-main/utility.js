function UpdateCaseFunction(BoxName, isIncrese) {
    const case_number_field = document.getElementById(BoxName);
    const case_number_String = case_number_field.value;
    const previous_case_number = parseInt(case_number_String);

    let new_case_number;

    if (isIncrese === true) {
        new_case_number = previous_case_number + 1;
    }
    else {
        new_case_number = previous_case_number - 1;
    }

    case_number_field.value = new_case_number;
    return new_case_number;
}


function pricechange(boxName, updateQuantity, value) {
    const casePriceBox = document.getElementById(boxName);

    const updateCasePrice = updateQuantity * value;


    casePriceBox.innerText = updateCasePrice;

    return updateCasePrice;

}


function gettextElemntValueById(id) {

    const boxText = document.getElementById(id);
    const boxTextString = boxText.innerText;
    const boxTextValue = parseInt(boxTextString);
    return boxTextValue;


}


function setElemntTextValueById(id, value) {

    const subtotalprice = document.getElementById(id);
    subtotalprice.innerText = value;
}


function Subtotal() {


    const phonePrice = gettextElemntValueById('PhonePrice');
    const casePrice = gettextElemntValueById('casePrice');

    const subtotal = phonePrice + casePrice;
    setElemntTextValueById('subtotal', subtotal)


    const taxAmount = subtotal * 0.1;
    setElemntTextValueById('taxtoal', taxAmount.toFixed(1));

    const fianlAmount = (subtotal + taxAmount).toFixed(1);
    setElemntTextValueById('finalamount', fianlAmount);








}



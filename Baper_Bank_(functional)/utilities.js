// This function helps to get value from input field.
function getInputValueById(inputId) {
    const inputfield = document.getElementById(inputId);         // empty this field after take value
    const inputFieldValueString = inputfield.value;
    const inputfieldValue = parseFloat(inputFieldValueString);
    inputfield.value = '';                                     // take first value where i keep my id.
    return inputfieldValue;
}

// This function helps to get box text.
function gettextElemntValueById(elemntId) {
    const textElemnt = document.getElementById(elemntId);
    const elemntValueString = textElemnt.innerText;
    const value = parseFloat(elemntValueString);
    return value;

}

// This function helps to set new value to the box. 
// there no need return value !!!
function setElemntTextValueById(elemntId, NewValue) {
    const textElemnt = document.getElementById(elemntId);
    textElemnt.innerText = NewValue;
}
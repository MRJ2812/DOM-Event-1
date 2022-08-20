document.getElementById("input_btn").addEventListener('click', function () {
    const input_filed = document.getElementById("input_filed");                        // normal method

    const input_filed_text = input_filed.value;              // take input filed given text

    const default_text = document.getElementById("default_text");
    default_text.innerText = input_filed_text;
    input_filed.value = ''

})

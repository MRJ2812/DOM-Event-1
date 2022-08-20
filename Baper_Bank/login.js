// Set event handler in button.
document.getElementById("btn").addEventListener('click', function () {
    // get the value from email box.
    const email = document.getElementById("email");
    emailId = email.value;
    console.log(emailId);

    // get the value from password box box.
    const password = document.getElementById("password");
    passwordCode = password.value;
    console.log(passwordCode);


    // Comapare email and password
    if (emailId === 'mdjoy2812@gmail.com' && passwordCode === '1234567') {
        window.location.href = 'inside.html';
    }
    else {
        alert("Wrong password");
    }



})
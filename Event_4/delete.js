document.getElementById("confirm").addEventListener('keyup', function (event) {    // set event lisenar in input section
    const text = event.target.value;                                              //  take the vlaue from input section
    const delete_btn = document.getElementById("btn");

    if (text === 'delete') {                                                    // if given value is delete then button anable
        delete_btn.removeAttribute('disabled');
    }
    else {
        delete_btn.setAttribute('disabled', true);                              // otherwise disable.
    }

})


// text disapear.
document.getElementById("btn").addEventListener('click', function () {

    const hide = document.getElementById("text");
    hide.style.display = 'none'
})



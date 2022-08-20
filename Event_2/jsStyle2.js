// 1st way --- we give id of a h1 tag and give function to button
// 2nd way --- give id to a button and also id to h1 tag. Use event handler.

// 1st way..
function direct_function() {
    document.getElementById("Normal_text").innerText = "WOW !! This is innerText change";  //we get id from text h1
}



// 2nd way..
document.getElementById("button_lisenar").addEventListener('click', function () {    //we get id from button
    const elistnar = document.getElementById("Normal_text");
    elistnar.innerText = "this will change by event lisenar";
})
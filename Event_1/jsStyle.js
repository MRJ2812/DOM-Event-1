//  1st way to  change background color by button.
// we use this option, other options are difficult. (3rd final also use,, the last one.) 
function makeRed() {
    document.body.style.backgroundColor = "red";
}


// 2nd way
function makeYellow() {
    document.body.style.backgroundColor = "yellow";
}

const yellow = document.getElementById("yellow");
yellow.onclick = makeYellow;


//   2nd way [Another]
const blue = document.getElementById("blue");
blue.onclick = function makeblue() {                       //same line function
    document.body.style.backgroundColor = "blue";
}


// 3rd option
const green = document.getElementById("green");
green.addEventListener('click', makegreen);

function makegreen() {
    document.body.style.backgroundColor = 'green';
}


// 3rd final option
document.getElementById("tomato").addEventListener('click', function maketomato() {  // after 'click' we have to give a function perameter.(we can also declare funcion other place)
    document.body.style.backgroundColor = 'tomato';
});



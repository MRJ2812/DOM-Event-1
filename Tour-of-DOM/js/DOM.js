console.log("Hellow world");
console.log(document.body);

// get Element by tag name.
const h1Collenction = document.getElementsByTagName('h1');

for (h1 of h1Collenction) {
    console.log(h1.innerText);
}


// get elemnt by id
const callId = document.getElementById('list')
console.log(callId.innerText);


// change value with call ID name by "Get element". same can do with class name.
const callId2 = document.getElementById('h1ID');
h1ID.innerText = "Ami noton";


// get elemnt by class
const callClass = document.getElementsByClassName('newClass');

for (classes of callClass) {
    console.log(classes);
}


const first = document.querySelector(".newClass");
console.log(first);

// get element without declare what we are seaching
let second = document.querySelectorAll(".newClass");                       // we have to give id symbol
console.log(second);


// change any element by style.
document.getElementById("h1ID").style.backgroundColor = "yellow";







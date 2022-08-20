let sections = document.querySelectorAll('section');   // get all element by section.

console.log(sections);

for (sec of sections) {
    sec.style.border = "2px solid blue";
}


// connect a class with css file.
const connection = document.getElementById('2nd_section');
connection.classList.add("own_made_class");


// remove a connected class
connection.classList.remove("own_made_class");


// add html file 
const htmlFile = document.createElement("section")
const mainClass = document.getElementById("main_class")

htmlFile.innerHTML = `<h1> this is me </h1>`

mainClass.appendChild(htmlFile);





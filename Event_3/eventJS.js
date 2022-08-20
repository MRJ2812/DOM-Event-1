// button click and take input by event lisenar.
document.getElementById("btn").addEventListener('click', function () {

    const textArea = document.getElementById("textArea");                 // take value from text box.
    const getValue = textArea.value;


    const container = document.getElementById("div-container");           // take div container

    const p = document.createElement('p');                                 // Create a paragraph attribute but this is not add in container.

    p.innerText = getValue;                                            // set value in paragraph from text area
    container.appendChild(p);                                        // insert value.
    textArea.value = ''
})









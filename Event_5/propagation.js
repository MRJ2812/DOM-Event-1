// stop bubble by propagation.

document.getElementById("number-1").addEventListener('click', function (event) {
    console.log("list click");
    event.stopPropagation();                                              // stop propagation.
})
document.getElementById("ul").addEventListener('click', function () {
    console.log("ul cliked");
})

document.getElementById('body').addEventListener('click', function () {
    console.log("body clicked");
})
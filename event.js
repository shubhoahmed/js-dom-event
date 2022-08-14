const makeBgRed = document.getElementById('red');
makeBgRed.onclick = makeRed;

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const makeBgYellow = document.getElementById('make-yellow');
makeBgYellow.onclick = function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

const makeBgGreen = document.getElementById('make-green');
makeBgGreen.addEventListener('click', makeGreen);
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

document.getElementById('make-black').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
})
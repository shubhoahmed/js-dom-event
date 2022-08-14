document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFiledText = inputField.value;

    const newText = document.getElementById('text-display');
    newText.innerText = inputFiledText;
    inputField.value = '';
})


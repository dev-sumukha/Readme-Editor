const inputField = document.querySelector('.input_field');
const outputField = document.querySelector('.output_field');
const resetButton = document.querySelector('.reset-button');
const copyButton = document.querySelector('.copy-button');
const bgChangeButton = document.querySelector('.bg-change-button');

inputField.addEventListener('input', () => {
    outputField.innerHTML = marked.parse(inputField.value);
});

resetButton.addEventListener('click', () => {
    inputField.value = '';
    outputField.innerHTML = '';
});

copyButton.addEventListener('click', () => {
    const content = inputField.value; 
    navigator.clipboard.writeText(content).then(() => {
        alert(content);
        console.log(content);
    });
});

bgChangeButton.addEventListener('click',() => {
    
});
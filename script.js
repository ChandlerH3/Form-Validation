// add js here

const errorDiv = document.getElementById('error');
const errorDiv1 = document.getElementById('error1');
const checkBox = document.getElementById('checkbox');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const pw = document.getElementById('pw');
const pw1 = document.getElementById('pw1');
const inputA = document.querySelectorAll('input');
const form = document.getElementById('form');

const suggest = document.getElementById('suggest');
const wordList = ['sports', 'music', 'movies', 'videogames', 'pets'];
const length = wordList.length;
const randomList = [];
for(let i = 0; i < length; i++){
    const count = Math.floor(Math.random() * wordList.length);
    randomList.push(wordList[count]);
    wordList.splice(count, 1);
}

const suggestT = document.createTextNode(randomList[0] + '-' + randomList[1] + '-' + randomList[2] + '-' + randomList[3] + '-' + randomList[4]);
suggest.appendChild(suggestT);

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (checkBox.checked === false) {
        window.alert('Please indicate that you agree to the terms of service.');
    } if (pw.value.length < 10) {
        errorDiv.style.display = 'block';
        pw.style.border = '2px solid red';
    } if (pw.value.length >= 10) {
        errorDiv.style.display = 'none';
        pw.style.border = '1px solid #dadada';
    } if (pw.value !== pw1.value) {
        errorDiv1.style.display = 'block';
        pw1.style.border = '2px solid red';
    } if (pw.value === pw1.value && pw.value.length >= 10){
        errorDiv1.style.display = 'none';
        pw1.style.border = '1px solid #dadada';
    } if (pw.value.length >= 10 && pw.value === pw1.value && checkBox.checked === true){
        window.alert('Success!');
    }
})   



clear.addEventListener('click', function(e){
    e.preventDefault();
    for (let i = 0; i < (inputA.length -1); i++) {
        inputA[i].value = '';
    }
    checkBox.checked = false;
})
function plus() {
    var num1, num2, result;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById('result').innerText = 'Результат: ' + result;
}
function minus() {
    var num1, num2, result;
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    result = num1 - num2;
    document.getElementById('result').innerText = 'Результат: ' + result;
}
function multiple() {
    var num1, num2, result;
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    result = num1 * num2;
    document.getElementById('result').innerText = 'Результат: ' + result;
}
function divide() {
    var num1, num2, result;
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    result = num1 / num2;
    if (num2 == 0) {
        var err = 'У Вас тшибка, на "0" делить нельзя';
        document.getElementById('result').innerText = err;
    } else {
        document.getElementById('result').innerText = 'Результат: ' + result;
    }
}

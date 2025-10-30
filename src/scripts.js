function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultField = document.getElementById("result");

    if (num1 === "" || num2 === "") {
        resultField.textContent = "Помилка: введіть обидва числа!";
        resultField.style.color = "red";
        return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
        resultField.textContent = "Помилка: введіть тільки числа!";
        resultField.style.color = "red";
        return;
    }

    let result;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                resultField.textContent = "Помилка: ділення на нуль!";
                resultField.style.color = "red";
                return;
            }
            result = a / b;
            break;
        default:
            resultField.textContent = "Невідома операція";
            resultField.style.color = "red";
            return;
    }


    if (!Number.isInteger(result)) {
        result = result.toFixed(2);
    }

    resultField.textContent = `Результат: ${result}`;
    resultField.style.color = "green";
}


function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "Результат: —";
    document.getElementById("result").style.color = "Black";
}
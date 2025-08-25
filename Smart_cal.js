let display = document.getElementById("display");
let isResultShown = false; 

function toDisplay(value) {
    if (isResultShown) {
        display.value = "";
        isResultShown = false;
    }
    if (display.value.length < 15) { 
        display.value += value;
    }
}

function toClear() {
    display.value = "";
    isResultShown = false;
}

function toDel() {
    if (!isResultShown) { 
        display.value = display.value.slice(0, -1);
    }
}

function calc() {
    let expre = display.value;
    let num = "";
    let result = 0;
    let operator = "+";

    for (let i = 0; i < expre.length; i++) {
        let ch = expre[i];

        if (/[0-9]/.test(ch) || ch === ".") {
            num += ch;
        } else {
            let n = Number(num);
            if (operator === "+") result += n;
            else if (operator === "-") result -= n;
            else if (operator === "*") result *= n;
            else if (operator === "/") result /= n;
            else if (operator === "%") result %= n;

            operator = ch;
            num = "";
        }
    }

    if (num !== "") {
        let n = Number(num);
        if (operator === "+") result += n;
        else if (operator === "-") result -= n;
        else if (operator === "*") result *= n;
        else if (operator === "/") result /= n;
        else if (operator === "%") result %= n;
    }

    display.value = result;
    isResultShown = true;
}

function square() {
    if (display.value !== "") {
        let n = Number(display.value);
        display.value = n * n;
        isResultShown = true;
    }
}

function cube() {
    if (display.value !== "") {
        let n = Number(display.value);
        display.value = n * n * n;
        isResultShown = true;
    }
}

function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

function factorial() {
    if (display.value !== "") {
        let n = Number(display.value);
        if (n < 0) {
            display.value = "Error"; 
        } else {
            display.value = factorialRecursive(n);
        }
        isResultShown = true;
    }
}

function evenOdd() {
    if (display.value !== "") {
        let n = Number(display.value);
        display.value = (n % 2 === 0) ? "Even" : "Odd";
        isResultShown = true;
    }
}

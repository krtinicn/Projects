const display = document.querySelector(".display")
const btn = document.querySelectorAll(".btn")
const clear = document.querySelector(".clear")
const equal = document.querySelector(".btn_eql")
display.textContent = "0"


let a = ""
let b = ""
let operator = ""
let isOperatorClicked = false;

btn.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (["+", "-", "*", "/"].includes(value)) {
            // If a, b, and operator are set, calculate intermediate result
            if (a !== "" && b !== "" && operator !== "") {
                const result = operate(Number(a), Number(b), operator);
                a = result.toString();
                b = "";
                display.textContent = a + value;
            }
            if (a === "") return;
            operator = value;
            isOperatorClicked = true;
        } else {
            if (!isOperatorClicked) {
                a += value;
            } else {
                b += value;
            }
        }
        // Show full expression
        display.textContent = a + (operator ? operator : "") + b;
    });
});

equal.addEventListener("click", () => {
    if (a !== "" && b !== "" && operator !== "") {
        const result = operate(Number(a), Number(b), operator);
        display.textContent = result;
        // Reset for next calculation
        if (b === "0") {
        display.textContent = "Sorry, cant divide with 0"
        } else {
        a = ""
        b = "";
        operator = "";
        isOperatorClicked = false;
        }
    }
});

clear.addEventListener("click", () => {
    display.textContent = "0";
    a = "";
    b = "";
    operator = "";
    isOperatorClicked = false;
});

function add (a, b) {
    return a + b
}

function sub (a, b) {
    return a - b
}

function multi (a, b) {
    return a * b
}

function div (a, b) {
    return a / b
}

function operate (a, b, operator) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return sub(a, b)
    } else if (operator === "*") {
        return multi(a, b)
    } else (operator === "/")
        return div(a, b)
}


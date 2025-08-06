const display = document.querySelector(".display")
const btn = document.querySelectorAll(".btn")
const clear = document.querySelector(".clear")
const equal = document.querySelector(".btn_eql")
const del = document.querySelector(".delete")
display.textContent = "0"


let a = "";
let b = "";
let operator = "";
let isOperatorClicked = false;
let justCalculated = false;

btn.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (justCalculated && !["+", "-", "*", "/"].includes(value)) {
            a = "";
            b = "";
            operator = "";
            isOperatorClicked = false;
            display.textContent = "";
            justCalculated = false;
        }

        if (["+", "-", "*", "/"].includes(value)) {
            if (a === "") return;
            operator = value;
            isOperatorClicked = true;
            justCalculated = false;
        } else if (value === ".") {
            if (!isOperatorClicked) {
                if (!a.includes(".")) a += value;
            } else {
                if (!b.includes(".")) b += value;
            }
        } else {
            if (!isOperatorClicked) {
                a += value;
            } else {
                b += value;
            }
        }
        display.textContent = a + (operator ? operator : "") + b;
    });
});

equal.addEventListener("click", () => {
    if (a !== "" && b !== "" && operator !== "") {
        if (operator === "/" && b === "0") {
            display.textContent = "Sorry, cant divide with 0";
        } else {
            const result = operate(Number(a), Number(b), operator);
            display.textContent = result;
            a = result.toString();
            b = "";
            operator = "";
            isOperatorClicked = false;
            justCalculated = true; // Set flag after calculation
        }
    }
});

clear.addEventListener("click", () => {
    display.textContent = "0";
    a = "";
    b = "";
    operator = "";
    isOperatorClicked = false;
    justCalculated = false;
});

del.addEventListener("click", () => {
    if (justCalculated) return;
    if(!isOperatorClicked) {
        a = a.slice(0, -1)
    } else {
        b = b.slice(0, -1)
    }
    if (a === "" && b === "") {
        display.textContent = "0";
    } else {
        display.textContent = a + (operator ? operator : "") + b;
    }
})

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


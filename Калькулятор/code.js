const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")

const calculate = (action) => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    let resultValue;

    switch (action) {
        case 'plus':
            resultValue = num1Value + num2Value;
            break;
        case 'minus':
            resultValue = num1Value - num2Value;
            break;
        case 'multiply':
            resultValue = num1Value * num2Value;
            break;
        case 'divide':
            if (num2Value !== 0) {
                resultValue = num1Value / num2Value;
            } else {
                resultValue = "Cannot divide by zero";
            }
            break;
        default:
            resultValue = "Unknown operation";
    }

    result.textContent = resultValue;
};

document.getElementById("plus").addEventListener("click", () => calculate("plus"))
document.getElementById("minus").addEventListener("click", () => calculate("minus"))
document.getElementById("multiply").addEventListener("click", () => calculate("multiply"))
document.getElementById("divide").addEventListener("click", () => calculate("divide"))
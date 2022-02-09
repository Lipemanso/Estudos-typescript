"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("btn"); // o simbolo ! especificar que o item button não é null.
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", () => {
    console.log(sum(Number(input1.value), Number(input2.value)));
    input1.value = " ";
    input2.value = " ";
});

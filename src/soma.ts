const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("btn")! // o simbolo ! especificar que o item button não é null.

function sum(a:number,b:number){
    return a + b;
}

button.addEventListener("click", ()=>{
    console.log(sum(Number(input1.value),Number(input2.value)))
    input1.value = " "
    input2.value = " "

});
const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o valor de A: "));
let b = parseFloat(prompt("Digite o valor de B: "));
let c = parseFloat(prompt("Digite o valor de C: "));

if (a + b > c && a + c > b && b + c > a) {
    console.log(`É possível formar uma triângulo`)
} else {
    console.log(`Não é possível formar uma triângulo`)
}
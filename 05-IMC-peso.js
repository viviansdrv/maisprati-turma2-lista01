const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Digite o peso: "));
let altura = parseFloat(prompt("Digite a altura em metros: "));

let imc = peso / (altura * altura);

let categoria;

if (imc < 18.5) {
    categoria = "Baixo peso";
} else if (imc >= 18.5 && imc < 25) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidade";
}

console.log(`IMC: ${imc}`);
console.log(`Categoria: ${categoria}`);

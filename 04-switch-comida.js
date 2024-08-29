const prompt = require('prompt-sync')();

let comida;

console.log("1. Pizza");
console.log("2. Hambúrguer");
console.log("3. Torta");

comida = parseInt(prompt("Digite o número correspondente à comida desejada: "));


switch (comida) {
    case 1:
        console.log(`Você escolheu pizza. O valor é R$75,00`)
        break;
    case 2: 
        console.log(`Você escolheu hambúrguer. O valor é R$35,00`)
        break;
    case 3:
        console.log(`Você escolheu torta. O valor é R$40,00`)
        break;

    default:
        console.log("Opção inválida. Escolha um número de 1 a 3.")
        break;
}


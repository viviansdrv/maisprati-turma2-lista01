let n1 = 0;
let n2 = 1;

console.log(n1); 
console.log(n2); 

for (let i = 3; i <= 10; i++) {
    let proximoNumero = n1 + n2;
    console.log(proximoNumero);

    n1 = n2;
    n2 = proximoNumero;
}

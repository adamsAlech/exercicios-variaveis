//calculo de imc
let peso = 77;
let altura = 1.76;

imc = (peso * altura) / (altura ** 2);
imcArredondado = imc.toFixed(2);
console.log(`O seu imc é: ${imcArredondado}`);
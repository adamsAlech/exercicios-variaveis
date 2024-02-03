// calcular juros compostos
let capital = 1000.00;
let juros = 0.155;
let tempo = 12;

// investimento de R$ 1000 a um juros de 15.5% em doze meses

retorno = capital * Math.pow((1 + juros), tempo);
retornoArredondado = retorno.toFixed(2);
console.log(`O rendimento do capital investido em juros composto em 12 meses é: ${retornoArredondado}`);
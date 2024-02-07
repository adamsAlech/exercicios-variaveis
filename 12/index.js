//# Exercício 12

//## Taxa de Juros

//Faça um programa que calcula a taxa de juros que foi operada sobre um financiamento a partir do
// montate total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo
// decorrido do financiamento.

//i = \left( \frac{M}{C} \right)^\frac{1}{n} - 1 

const montantePago = 90000;
const capitalEmprestimo = 60000;
const tempoEmprestimo = 24;

const calculo = ((montantePago / capitalEmprestimo) ** (1 / tempoEmprestimo)) - 1;
const taxaDeJuros = calculo * 100;
console.log(`O seu financiamento de 60000 reais teve uma taxa de juros de ${taxaDeJuros.toFixed(3)}%, pois após 24 meses você teve que pagar 90000 reais.`);

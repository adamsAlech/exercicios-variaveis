// calcular porcentagem de desconto
let valorTenis = 129.99;
let porcentagem = 100;
let meuValor = 80.00;

valorDesconto = (meuValor * porcentagem) / valorTenis;
valorDescontoArredondado = valorDesconto.toFixed(2);
console.log(`A porcentagem para o desconto é ${valorDescontoArredondado} %`);
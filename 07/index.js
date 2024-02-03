const pessoasInfectadas = 1000;
const possiveisTransmissao = 4;
const amostraTempo = 100;

//calculo de pessoas infectadas após 100 dias
const quantidadeTransmissão = Math.pow((pessoasInfectadas * possiveisTransmissao), (amostraTempo / amostraTempo))
console.log(quantidadeTransmissão.toFixed(2))

//$$ P = Po \* x ^\frac{t}{7} $$
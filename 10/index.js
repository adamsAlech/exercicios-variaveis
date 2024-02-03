//Na "Famigerada" fórmula de báskhara, que serve para calcular as raízes de uma
//equação de segundo grau, o primeiro passo é calcular o valor de delta, a partir
//dos coeficientes $a$, $b$ e $c$. Dado uma equação de segundo grau no formato:


//$$ ax^2 + bx + c = 0 $$


const x = 5;
//equação = (5x ^ 2 + 5x + 1 = 0;)
//delta = b^2 - 4ac

delta = Math.pow(x, 2) - 4 * x * 1;
console.log(delta);
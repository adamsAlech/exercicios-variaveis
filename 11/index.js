// Exercício 11

////## Volume de uma esfera

//Para calcular o volume de uma esfera, utilizamos a seguinte fórmula:

//$$ v = \frac{4}{3} *pi *r ^ 3 $$

//onde:

//**v:** volume da esfera \
//**d:** diâmetro da esfera


const diametro = 6;
const raio = diametro / 2;

volumeEsfera = (4 / 3) * (raio ** 3);
console.log(`O volume de uma esfera de raio 3 é ${volumeEsfera.toFixed(2)} PI`);
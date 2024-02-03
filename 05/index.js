// calcular distancia entre dois pontos em um plano cartesiano
let distanciaX1 = 5;
let distanciaX2 = 6;
let distanciaY1 = 5;
let distanciaY2 = 6;

distanciaXy = Math.sqrt(Math.pow((distanciaX2 - distanciaX1), 2) + Math.pow((distanciaY2 - distanciaY1), 2));
distanciaXyArredondada = distanciaXy.toFixed(2);
console.log(`A Distancia entre os pontos é: ${distanciaXyArredondada}`);

/*# Exercício 13

## Área total de um cilindro.

Um cilindro tem duas bases e uma lateral. Veja como fica um cilindro planificado.

![](https://www.preparaenem.com/upload/conteudo/images/planificacao1.jpg)

Portanto, para calcular a área total de um cilindro, é necessário somar a área de cada uma das suas duas bases, com a sua área lateral. A fórmula da área total é a seguinte:

$$ At = 2piR(R + H) $$

Sendo:

**At:** área total do cilindro \
**R:** raio da base \
**H:** altura do cilindro*/

//raio cilindro = 3
//altura cilindro = 1

let raio = 3;
let altura = 1;
let areaTotalCilindro = (2 * raio * (raio + altura));
console.log(`a área total do cilindro é ${areaTotalCilindro}pi`);
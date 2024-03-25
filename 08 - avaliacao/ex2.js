const { gets, print } = require('./funcoes-auxiliares-ex2');

const quantidadeNumeros = gets();
let menorImpar = null;
let maiorPar = null;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }

    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }

}
print(maiorPar);
print(menorImpar);







const { gets, print } = require('./funcoes-auxiliares');


const quantidadeAlunos = gets();
let maiorNumero = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
}

print(maiorNumero)


// const numerosSorteados = [];

// let maiorNumero = 0;

// for (let i = 0; i < 5; i++) {
//     const numerosSorteado = gets();
//     numerosSorteados.push(numerosSorteado);
// }




// for (let i = 0; i < numerosSorteados.length; i++) {
//     const aluno = numerosSorteados[i];
//     if (aluno > maiorNumero) {
//         maiorNumero = aluno;
//     }
// }
// print(maiorNumero);


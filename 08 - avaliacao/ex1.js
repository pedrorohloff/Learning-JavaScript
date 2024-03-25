const { gets, print } = require('./funcoes-auxiliares-ex1');

const notas = gets();

if (notas < 5) {
    print('Reprovado.');
} else if (notas >= 5 && notas < 7) {
    print('Recuperação.')
} else if (notas > 7) {
    print('Aprovado.')
} else {
    print('Nota inválida.')
}



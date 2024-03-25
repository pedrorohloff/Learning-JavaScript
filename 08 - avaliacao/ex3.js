const { gets, print } = require('./funcoes-auxiliares-ex3');

const salarioBruto = gets();
const adicionaisSalario = gets();

let valorATransferir = 0;

function calcularSalario() {
    if (salarioBruto <= 1100) {
        valorATransferir = salarioBruto * 0.95
    } else if (salarioBruto > 1100 && salarioBruto <= 2500) {
        valorATransferir = salarioBruto * 0.90;
    } else {
        valorATransferir = salarioBruto * 0.85;
    }
    return valorATransferir += adicionaisSalario;

}

print(calcularSalario());

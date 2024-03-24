

let precoEtanol = 3.59;
let precoGasolina = 5.19;
let tipoCombustivel = 'Gasolina';
let distanciaViagem = 3147;
let gastoMedioViagem = 0;
let autonomiaCarro = 15;

if (tipoCombustivel === 'Gasolina') {
    gastoMedioViagem = (distanciaViagem / autonomiaCarro) * precoGasolina;
} else if (tipoCombustivel === 'Etanol') {
    gastoMedioViagem = (distanciaViagem / autonomiaCarro) * precoEtanol;
} else {
    console.log('Tipo de combustível inválido');
}

console.log(gastoMedioViagem.toFixed(2));

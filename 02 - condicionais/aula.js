
const numero  = 6156510;
const isDivisivelPorCinco = (numero % 5) === 0;


if (numero === 0){
    console.log('O numero é invalido');
} else if (isDivisivelPorCinco) {
    console.log('Sim');
} else {
    console.log('Não')
}

console.log(isDivisivelPorCinco)




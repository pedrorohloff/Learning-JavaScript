
// function calcularJuros() {

// }


// function main() {
//     console.log('Programa principal');
//     calcularJuros();
// }

// main();



function calcularIMC (peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC (imc) {
    
    if (imc < 18.5) {
        return 'abaixo do peso'
    }
    else if (imc >= 18.5 && imc < 25) {
        return 'peso normal'
    }
    else if (imc >= 25 && imc < 30) {
        return 'sobrepeso'
    }
    else if (imc >= 30 && imc < 40) {
        return 'obesidade'
    }
    else {
        return 'obresidade morbida'
    }
}

function main() {
    let peso = 70;
    let altura = 1.73;
    let imc = calcularIMC(peso, altura);

    console.log(classificarIMC(imc)); 
}

// (function main() {
//     let peso = 70;
//     let altura = 1.73;
//     let imc = calcularIMC(peso, altura);

//     console.log(classificarIMC(imc)); 
// })();  // funcao imediatamente invocada - cria e se executa logo em seguida



main();




let valorCompra = 750;
let metodoPagamento = '3x+';

if ( metodoPagamento === 'PIX' || metodoPagamento === 'Dinheiro'){
    valorCompra *= 0.85;
} else if ( metodoPagamento === 'Debito' ){
    valorCompra *= 0.90;
} else if ( metodoPagamento === '3x+' ) {
    valorCompra *= 1.10;
}
console.log(valorCompra.toFixed(2))



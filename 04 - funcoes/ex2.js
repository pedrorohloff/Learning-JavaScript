
let valorCompra = 750;
let metodoPagamento = 2;

function calcularValor(valorCompra, metodoPagamento) {
    if (metodoPagamento === 1) {
        return valorCompra *= 0.85;
    } else if (metodoPagamento === 2) {
        return valorCompra *= 0.90;
    } else if (metodoPagamento === 3) {
        return valorCompra = valorCompra;
    } else if (metodoPagamento === 4) {
        return valorCompra *= 1.10;
    }
}

console.log(calcularValor(valorCompra, metodoPagamento))



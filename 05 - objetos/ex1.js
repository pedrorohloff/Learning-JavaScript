
class Carro {
    marca;
    cor;
    autonomia;

    constructor(marca, cor, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }

    precoViagem(distancia, precoCombustivel) {
        return (distancia / this.autonomia) * precoCombustivel;
    }
}



const hb20 = new Carro('Hyundai', 'Branco', 11);
const ASX = new Carro('Mitsubishi', 'Branco', 9);

const distancia = 100;
const precoCombustivel = 10;

console.log(hb20.precoViagem(distancia, precoCombustivel).toFixed(2));

console.log(ASX.precoViagem(distancia, precoCombustivel).toFixed(2));






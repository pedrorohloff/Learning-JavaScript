

class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }else {
        console.log(`${p1.nome} tem a mesma idade ${p2.nome}`);
    }
}

const vitor = new Pessoa('vitor', 25);
const pedro = new Pessoa('Pedro' ,22)

compararPessoas(vitor, pedro)
















// const pedro = {
//     nome: 'Pedro H Rohloff',
//     idade: 22,

//     descrever: function(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }

// const atributo = 'idade';

// console.log(pedro[atributo]);

// console.log(pedro['nome']); // acesso dinamico
 






// pedro.descrever();

// console.log(pedro.nome);
// console.log(pedro.idade);

// pedro.altura = 175;

// console.log(pedro);

// delete pedro.nome;

// console.log(pedro);


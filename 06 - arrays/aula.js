
const notas = [];


notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma / notas.length;

console.log(media.toFixed(2));













// const alunos = ['pedro', 'joao', 'marina'];
// // pode comecar vazia e ir usando o push para adicionar


// console.log(alunos)

// alunos.push('renan'); //adiciona a lista no ultimo index
// alunos[4] = 'vinicius'

// alunos.pop(); // remove o ultimo da lista
// alunos.shift(); // remove o primeiro da lista



// console.log(alunos) 



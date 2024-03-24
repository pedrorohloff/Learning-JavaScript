

function sayMyName(nome) {
    return 'seu nome é ' + nome;
}
function verificarIdade (idade) {
    console.log(sayMyName('pedro'))

    if (idade < 18){
        return 'Menor de idade';
    }else{
        return 'Maior de idade';
    }   
}
console.log(verificarIdade(22));


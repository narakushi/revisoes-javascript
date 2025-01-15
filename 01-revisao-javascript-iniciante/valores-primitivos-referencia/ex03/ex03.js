// Escreva uma função que modifique um objeto passado como argumento e verifique se as alterações são refletidas fora da função.

const pessoa = {
    nome: 'Ana',
    idade: 23
}

function alteraObjeto(pessoa){
    pessoa.nome = 'Joana';

    console.log('dentro da função: ', pessoa.nome);
}



alteraObjeto(pessoa.nome);
console.log('fora da função: ', pessoa.nome);
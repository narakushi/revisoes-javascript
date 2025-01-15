// Escreva uma função que receba um objeto e imprima no console todas as chaves e valores do objeto usando um loop for in.

function recebeObj(objeto){
    for (let chave in objeto){
        console.log(`${chave}: ${objeto[chave]}`);
    }
}

const pessoa = {
    nome: 'Wilda',
    idade: 53,
    EC: 'Viúva',
    NumeroSorte: 13
}

recebeObj(pessoa);
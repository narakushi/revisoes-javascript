// Escreva uma função que receba uma lista de palavras e retorne o comprimento da maior palavra.


const verificaMaior = function (lista) {
    let tamanho = 0;
    let maiorTamanho = 0;
    let palavraMaior;

    for (let palavra of lista) {
        tamanho = palavra.length;

        if(tamanho > maiorTamanho){
            palavraMaior = palavra;
            maiorTamanho = tamanho;
        }
    }

    console.log(`palavra com maior tamanho: ${palavraMaior}, tamanho: ${maiorTamanho}`);
}

const lista = ['abobora', 'chuchu', 'couve', 'alface', 'saoexpedito'];

verificaMaior(lista);
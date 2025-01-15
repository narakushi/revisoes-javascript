// Escreva um programa que receba um array de números e retorne a soma de todos os números usando um loop for of.

function somaArray(numeros){

    let soma = 0;

    for(let numero of numeros){
        soma += numero;
    }

    return soma;
}

const numeros = [1, 4, 3, 6, 1, 8, 2, 10];

console.log(`Somatório: ${somaArray(numeros)}`);
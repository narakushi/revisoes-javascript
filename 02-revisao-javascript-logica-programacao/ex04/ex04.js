// Escreva uma função que receba um array de números e retorne a soma de todos os números pares no array.

function somatorioPar(numeros){
    let soma = 0;

    numeros.forEach(numero => {
        if(numero % 2 == 0){
            soma += numero;
        }
    });

    return soma;
};


let numeros = [1, 3, 2, 54, 5, 6, 7, 100];

let somatorio = somatorioPar(numeros);

console.log(somatorio);
/**
 * Uso de arguments
 * Escreva uma função chamada sumAll que aceita qualquer número de argumentos e retorna a soma de todos eles.
 * Use a palavra-chave arguments para acessar os parâmetros.
 * 
 */

/** forma usando function */
/*function sumAll () {
    let total = 0;
    for(let arg of arguments) {
        total += arg;
    }
    return total;
}

console.log(sumAll(2, 4, 5, 6, 8));
console.log(sumAll(4, 6, 7));*/

/** forma usando const, note que uso args aqui pois arguments não é suportado */
const sumAll = (...args) => {
    let total = 0;
    for (let arg of args) {
        total += arg
    }
    return total;
}

console.log(sumAll(1, 2, 3, 9))
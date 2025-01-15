/**
 * 4. Parâmetros Rest (...args)
 * Escreva uma função chamada 
 * filterEvenNumbers que aceite um número indefinido de argumentos.
 */

/*
const filterEvenNumbers = (...args) => {
    const evens = []
    for (let i in args) {
        if (args[i] % 2 === 0) {
            evens.push(args[i]);
        }
    }
    return evens;
}*/

// forma com filter

const filterEvenNumbers = (...args) => args.filter(num => num % 2 === 0);

console.log(filterEvenNumbers(2, 4, 5, 6, 7, 12, 8, 9, 1));

// recomendações de melhorias do chatgpt:
// usar for of ou fazer uso do filter para otimizar a filtragem.
// filter também é mais semantico nesse caso.
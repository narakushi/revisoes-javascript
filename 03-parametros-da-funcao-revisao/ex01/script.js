/**1. Função com Valores de Fallback
 * Crie uma função chamada greet que receba dois parâmetros: name e greeting.
 * Se greeting não for passado, ele deve ter um valor padrão de "Hello".
 * A função deve retornar uma string no formato: "greeting, name!". */

const greet = (name='Your name', greeting="Hello") => {
    return `${greeting}, ${name}`
}

console.log(greet('Alisson'));
console.log(greet('Luisa', 'Oie'));
/**
 * 3.	Fechamentos (Closures) e Escopo Léxico 
 * Crie uma função chamada createMultiplier que recebe um número n e 
 * retorna uma função que multiplica qualquer número passado a ela por n. 
 * Demonstre como o escopo léxico permite que a função interna acesse o valor de n 
 * mesmo após a execução da função createMultiplier.
 * Dica: A função interna deve acessar a variável n e multiplicar o número passado como argumento.
 * 
 */

const createMultiplier = (n) => {

    const mutilpier = (num) => {
        return num * n;
    }

    return mutilpier;
}

const multiplier = createMultiplier(3);

console.log(multiplier(6));


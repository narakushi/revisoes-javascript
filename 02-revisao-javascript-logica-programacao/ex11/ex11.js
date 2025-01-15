// Escreva uma função que receba um número e verifique se é um número de Fibonacci.


// 0  1  1  2  3  5  8
 /*           
const geraFibonacci = (numero) => {
    let t1 = 0;
    let t2 = 1;
    let t3 = 0;

    while(t1 != numero){
        t3 = t1 + t2;
        t1 = t2;
        t2 = t3;
    }

    return t1;
}*/

const verificaFibonacci = (num) => {
    const binetOne = (5 * (num ** 2) + 4);
    const binetTwo = (5 * (num ** 2) - 4);

    const sqrtBinetOne = Math.sqrt(binetOne);
    const sqrtBinetTwo = Math.sqrt(binetTwo);

    if((Number.isInteger(sqrtBinetOne)) || (Number.isInteger(sqrtBinetTwo))){
        return true;
    }
    return false;
}

const num = parseInt(prompt('Informe um número para que eu verifique se pertence a sequencia fibonacci: '));

const result = verificaFibonacci(num);

if(result){
    alert(`${num} pertence a sequencia fibonacci`);
}
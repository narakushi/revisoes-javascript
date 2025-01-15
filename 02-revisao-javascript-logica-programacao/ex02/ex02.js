// Escreva uma função que receba um número como parâmetro e retorne true se o número for primo e false caso contrário.

const verificaPrimo = (num) => {
    let countDiv = 0;

    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            countDiv++;
        }
    }

    if(countDiv === 2){
        return true;
    }
    return false;
}

console.log(verificaPrimo(5));
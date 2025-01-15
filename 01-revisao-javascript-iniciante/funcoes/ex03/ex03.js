// Crie uma função que aceite um array como argumento e retorne seu comprimento.

const medeArray = (array) =>  {
    let count = 0;

    for (e of array){
        count++;
    }

    return count;
}

const array = [1, 3, 4, 5, 6, 6, 7];

console.log(medeArray(array));
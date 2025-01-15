// Escreva uma função que receba um array de números e retorne uma novo array com os números ordenados em ordem crescente.

function ordena(array){
    let aux = null;

    for(let i = 0; i < array.length; i++){
        for(let k = i+1; k < array.length; k++){
            if(array[i] > array[k]){
                aux = array[i];
                array[i] = array[k];
                array[k] = aux;
            } 
        }
    }

    return array;
}

const array = [4, 2, 1, 5];

const novoArray = ordena(array);

console.log(novoArray);


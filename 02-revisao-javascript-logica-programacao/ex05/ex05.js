//Escreva uma função que receba um array de números e retorne o número que aparece mais vezes no array.


function maiorRepeticao(array){
    let count = 0
    let countMaior = 0;
    let numRepetido;

    for(let i = 0; i < array.length; i++){
        count = 1;
        for(let j = i + 1; j < array.length; j++){
            if(array[i] == array[j]){
                count++;
            }

            if(count > countMaior){
                numRepetido = array[i];
                countMaior = count;
            }
        }
    }
    console.log(`Número que mais se repete: ${numRepetido}. \nQuantidade de vezes que se repete: ${countMaior}`);

}

const array = [1, 3, 4, 5, 5, 5, 9, 10, 10, 3, 3, 3];

maiorRepeticao(array);
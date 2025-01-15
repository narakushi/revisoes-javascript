// Escreva uma função que receba uma matriz (array de arrays) de números e retorne uma nova matriz com os números ordenados em ordem crescente.

function mostraMat(matriz){
    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i]);
    }
}

function ordenaColuna(matriz) {
    let aux;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            for(let k = j+1; k < matriz.length; k++){
                if(matriz[i][j] > matriz[i][k]){
                    aux = matriz[i][j]
                    matriz[i][j] = matriz[i][k];
                    matriz[i][k] = aux;
                }
            }
        }
    }
    return matriz;
}


function ordenaLinha(matriz){
    let aux;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            for(let k = i + 1; k < matriz.length; k++){
                if(matriz[i][j] > matriz[k][j]){
                    aux = matriz[i][j];
                    matriz[i][j] = matriz[k][j];
                    matriz[k][j] = aux;
                }
            }
        }
    }

    ordenaColuna(matriz);
}

const matriz = Array(3);

matriz[0] = [58, 7];
matriz[1] = [2, 1];
matriz[2] = [-1, 6];

const matrizOrdenada = ordenaLinha(matriz);

mostraMat(matriz);

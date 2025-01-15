/** 5.	Validação de Tipos e Lançamento de Erros 
 * Crie uma função chamada calculateArea que receba dois parâmetros: length e width.
 * A função deve lançar um erro se qualquer um dos parâmetros não for um número ou for menor ou igual a zero.
 * Caso os parâmetros sejam válidos, a função deve retornar a área do retângulo.
 */

const calculateArea = (length, width) => {
    if (typeof length != 'number' || typeof width != 'number') {
        throw new TypeError("Os parâmetros devem ser números!");
    }
    if(length <= 0 || width <= 0){
        throw new Error("Os parâmetros devem ser números positivos e maiores que zero!");
    }

    return length * width;
}

try{
    console.log(calculateArea(4, 5));
   
}
catch(error){
    console.log(error.message);
}

try {
    console.log(calculateArea("3", 6));
   
}
catch(error) {
    console.log(error.message);
}

try {
    console.log(calculateArea(-3, -6));
}
catch (error){
    console.log(error.message);
}


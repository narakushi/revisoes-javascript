//Declare uma variável com uma string e imprima seu comprimento.

const palavra = 'Flores in house';
let tam = 0;

console.log(`Tamanho com espaços: ${palavra.length}`);

for (letra of palavra) {
    if(letra !== ' '){
        tam += 1;
    }
}

console.log(`Tamanho sem espaços: ${tam}`);
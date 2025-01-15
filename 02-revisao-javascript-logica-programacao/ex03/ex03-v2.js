// Escreva uma função que receba uma string como parâmetro e retorne a string invertida. Por exemplo, se a entrada for "hello", a saída deve ser "olleh".


function inverteString(palavra){
    let palavraSplit = palavra.split("");
    return palavraSplit.reverse();
}

let palavraInvertida = inverteString('Labareda')

console.log(palavraInvertida.join(''));


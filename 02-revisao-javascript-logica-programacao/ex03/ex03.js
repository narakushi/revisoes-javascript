// Escreva uma função que receba uma string como parâmetro e retorne a string invertida. Por exemplo, se a entrada for "hello", a saída deve ser "olleh".


const inverteString = function (palavra){
    let palavraInvertida = [];

    for(let i = (palavra.length - 1); i >= 0; i--){
        palavraInvertida.push(palavra[i]);    
    }

    return palavraInvertida.join('');
}

const palavra = prompt('Informe uma palavra: ');

let palavraPag = document.getElementById('exibicao');

let palavraPag2 = document.getElementById('exibicao2');

let palavraInvertida = inverteString(palavra);

palavraPag2.innerHTML = `Palavra original ${palavra}`;

palavraPag.innerHTML = `Palavra invertida: ${palavraInvertida}`;

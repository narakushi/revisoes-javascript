// Escreva uma função que receba um número e retorne o fatorial desse número.

const fatorial = (n) => {
    let fat = 1;

    while(n){
        fat *= n;
        n--;
    }

    return fat;
}

const num = parseInt(prompt('Informe um valor para calcular seu fatorial: '));
const resultado = document.getElementById('result');

let fat = fatorial(num);

resultado.innerHTML = `${num}! = ${fat}`;

console.log(resultado);



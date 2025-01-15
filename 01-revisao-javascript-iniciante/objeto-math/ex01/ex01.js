//Gere um número aleatório entre 0 e 1 usando `Math.random()`.

let num = Math.random();


console.log(num);

//gerando um numero aleatório entre 1 e 10

let num2 = Math.random() * (10 - 1) + 1;

console.log(num2.toFixed());

while(num2 != 10){
    num2 = Math.random() * (10 - 1) + 1;
    num2 = num2.toFixed()
    console.log(num2);
}
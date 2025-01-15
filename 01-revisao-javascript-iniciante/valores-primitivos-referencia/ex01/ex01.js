// Declare uma variável primitiva e outra por referência e modifique-as.

//variaveis primitivas

let num = 50;

let num2 = num;

console.log(num, num2);

let a = null;

let b = a;

console.log(a);

let z = 'js';
let x = z;

console.log(typeof(x));

//variaveis por referência

const rgb = ['red', 'green', 'blue'];

//encontrando o tipo de valor por referência
console.log(rgb instanceof Array);

//criando um objeto
const aluno = {
    nota: 5.0,
    nome: "ana"
}

const al = aluno;

al.nome = 'joao';

console.log(aluno);

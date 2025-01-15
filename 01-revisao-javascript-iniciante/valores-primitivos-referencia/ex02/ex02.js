// Crie um array e atribua a ele alguns elementos. Em seguida, atribua esse array a uma nova variável, modifique um dos elementos do novo array e verifique se o array original foi modificado também.

const array = ['a', 'w', 'e', 'r'];

const novoArray = array;


novoArray[2] = 'k';

console.log(array);




//valores primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol)


//strings são indexadas
/*let nome = 'Luiz';
nome[0] = 'R'; //
console.log(nome[0]);

let a = 'A';
let b = a; //cópia

console.log(a, b);


//referencia (mutável) -  array, object, function

let array = [1, 2, 3];

let arrayb = array;

let arrayc = arrayb;
console.log(array, arrayb);

array.push(4);

console.log(array, arrayb);

arrayb.pop();

console.log(array, arrayb);

arrayc.push('Ana');
console.log(arrayc, arrayb);

// todos os valores acima foram passados por referência, então eles apontam para o mesmo endereço de memoria que armazena apenas um valor

//para copiar um valor de um array no outro, no lugar de passar por referência, fazemos:

let x = [5, 6, 7];
let y = [...x];

console.log(y);*/
/*
const a = {
    nome: 'Ana',
    sobrenome: 'Silva'
};

const b = {...a};

a.nome = 'Luan'
console.log(a, b);*/
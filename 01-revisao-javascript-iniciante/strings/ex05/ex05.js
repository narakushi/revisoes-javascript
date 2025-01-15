//Substitua uma parte de uma string por outra usando o método `replace()`.

/*
const frase = prompt('Informe uma frase: ');
const palavra = prompt('Agora informe uma palavra que exista na frase: ');
const troca = prompt('Informe a palavra que irá substituir a anterior');


let fraseAlt = frase.replace('palavra', troca);

alert(`Sua frase original: ${frase} \n Sua frase alterada: ${fraseAlt}`);
*/

/** Buscando a ocorrencia da palavra globalmente com Regex (Regular Expression)*/

const frase = 'Eu adoro comer pizza, o meu sabor favorito de pizza é calabresa!';

const fraseAlt = frase.replace(/pizza/g, 'torta');

console.log(fraseAlt);
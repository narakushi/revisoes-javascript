// Escreva uma função que receba um objeto representando uma pessoa com as propriedades nome e idade, e retorne uma string com uma mensagem formatada usando desestruturação para extrair essas propriedades.

function desestruturaObj(pessoa){
    const {nome, idade} = pessoa;

    return `Olá, ${nome}, você já está com ${idade} anos`;
}

const pessoa = {
    nome: 'Yasmin',
    idade: 23
};

console.log(desestruturaObj(pessoa));
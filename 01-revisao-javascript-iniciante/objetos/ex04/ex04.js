// Crie um método no objeto pessoa que imprima uma saudação com o nome da pessoa.

const pessoa = {
    nome: "Yasmin",
    sobrenome: "Silva",
    idade: 28,
    profissao: "Programadora",
    cidade: "Alagoinhas",
    pais: "Brasil",

    dizOla(){
        console.log(`Olá sou a ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
    }
}

pessoa.dizOla();
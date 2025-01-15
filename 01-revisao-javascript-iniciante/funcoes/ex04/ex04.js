// >Declare uma função que retorne um objeto representando uma pessoa com propriedades como nome e idade

const criaPessoa = function(){
    let nome = prompt('Informe seu nome: ');
    let idade = prompt('Informe sua idade: ');

    const pessoa = {
        nome: nome,
        idade: idade
    }

    return pessoa;
}

const pessoa = criaPessoa()

alert(`Seu nome é ${pessoa.nome} e sua idade é ${pessoa.idade} anos.`);
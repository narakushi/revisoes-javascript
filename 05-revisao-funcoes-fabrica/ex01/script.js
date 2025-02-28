// 1. Criando um Usuário
// Crie uma factory function chamada createUser que receba nome, idade e email como parâmetros e retorne um objeto com esses dados. O objeto também deve ter um método greet() que exibe uma mensagem no console com o nome do usuário.

const createUser = (name, age, email) => {
  return {
    name,
    age,
    email,

    greet: function () {
      console.log(`Olá meu nome é ${this.name} e tenho ${this.age}`);
    }
  }
}

const user1 = createUser('Logan', 34, 'logan123@gmail.com');
const user2 = createUser('Kail', 32, 'kail23@gmail.com');
const greet  = user1.greet;

user1.greet();
user2.greet();

greet();
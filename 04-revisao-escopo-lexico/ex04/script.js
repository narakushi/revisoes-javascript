/**
 * 4. Gerador de Saudações Personalizadas
Crie uma função createGreeting que recebe um nome como parâmetro e
 retorna uma função que, quando chamada, exibe uma saudação personalizada.
Exemplo:
javascript
CopiarEditar
const greetJohn = createGreeting('John');
greetJohn(); // "Olá, John!"

 * 
 */

const createGreeting = (nome) => {

    function greeting() {
        console.log('Oie', nome);
    }

    return greeting;
}

const greeting = createGreeting('Esther');
const greeting2 = createGreeting('Allan');

greeting();
greeting2();

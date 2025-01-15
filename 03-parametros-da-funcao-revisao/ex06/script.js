/**6.	Parâmetros Nomeados e Fallback com Lançamento de Erros 
 * Escreva uma função chamada createUserProfile que receba um objeto como 
 * parâmetro com as propriedades:
o	name (obrigatório, string)
o	age (opcional, número com valor padrão de 18)
o	email (obrigatório, string)
A função deve:
o	Lançar um erro se name ou email não forem fornecidos ou não forem do tipo string.
o	Retornar um objeto contendo as informações fornecidas.
 */

const createUserProfile = (user) => {
    const { name, age = 18, email } = user;

    if(typeof age != 'number'){
        throw new TypeError("Idade deve ser do tipo numerico!");
    }

    if (!name || !email) {
        throw new Error("Nome e email são obrigatórios!")
    }
    else if (typeof name != 'string' || typeof email != 'string') {
        throw new TypeError("Nome e email devem ser strings!");
    }

    return { name, age, email };
}

try {
    const user1 = createUserProfile({ name: 'Gabrielina', age: '5', email: 'gablindsay@gmail.com' });
    console.log(user1);
    const user2 = createUserProfile({ name: 123, email: 'email@gmail.com' });
    console.log(user2);
}
catch (err) {
    console.log(err.message);
}

const acumulator = (...args) => {
    let total = 0;

    for(let arg of args) {
        total += arg;
    }
    return total;
}

console.log(acumulator(13, 45, 1, 0, 3, 4, 5));
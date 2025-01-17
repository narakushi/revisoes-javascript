/**
 * 6. Controle de Acesso
Crie uma função createUser que retorna um objeto com:
•	Um método login que verifica se uma senha está correta.
•	Um método setPassword que permite alterar a senha.
A senha inicial deve ser definida ao criar o usuário e só pode ser acessada 
pelos métodos da função.
 * 
 */

function createUser(name, pass) {
    return {
        name: name,
        pass: pass,

        login() {
            if (pass === this.pass) {
                return true;
            }
            console.log(pass);
            console.log(this.pass)
            return false;
        },

        setPassword(pass) {
            this.pass = pass;
            return 'senha alterada';
        }
    }
}

const user = createUser('naraskuhi', 1234);
console.log(user.name);
console.log(user.pass);
console.log(user.login());
console.log(user.setPassword(9090));
console.log(user.login());
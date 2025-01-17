/**
 * 3. Multiplicadores com Configuração
Modifique o exemplo do createMultiplier para que a função retornada tenha dois métodos:
•	multiply: que multiplica o número passado pelo valor de n.
•	updateMultiplier: que permite atualizar o valor de n.
Teste o funcionamento do multiplicador antes e depois de atualizar o valor de n.
 */

const createMultiplier = (n) => {

    const multiplier = (numero) => {
        return {
            numero: this.numero,

            multiply() {
                const result = numero * n;                
                console.log(result);
            },

            updateMultiplier(newNum) {
                n = newNum;
                console.log(`Valores serão multiplicados por *${n}* a partir de agora!`);
            }
        }
    }

    return multiplier;
}

const multiplier = createMultiplier(4);

multiplier(5).multiply(); //passando valor e pedindo multiplicação
multiplier().updateMultiplier(2);
multiplier(5).multiply();


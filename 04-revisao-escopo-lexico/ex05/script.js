/**
 * 3. Multiplicadores com Configuração
Modifique o exemplo do createMultiplier para que a função retornada tenha dois métodos:
•	multiply: que multiplica o número passado pelo valor de n.
•	updateMultiplier: que permite atualizar o valor de n.
Teste o funcionamento do multiplicador antes e depois de atualizar o valor de n.
 */

// fazendo com base na interpretação de função dentro de função
// essa função retorna uma função que sempre que acionada, cria um novo objeto
/*const createMultiplier = (n) => {

    const multiplier = () => {
        return {
            multiply(numero) {
                console.log(n * numero);
            },

            updateMultiplier(newNumber) {
                n = newNumber;
                console.log(`multiplicador alterado para ${newNumber}`);
            }
        }
    }

    return multiplier;
}

const multiplier = createMultiplier(4);

multiplier().multiply(3);
multiplier().multiply(4);
multiplier().updateMultiplier(6);
multiplier().multiply(2);
multiplier().multiply(3);
multiplier().multiply(4);*/

/** fazendo com base na interpretação de função que retorna um objeto com métodos */

const createMultiplier = (n) => {
    return {
        multiply(numero) {
            console.log(n * numero);
        },

        updateMultiplier(newNumber){
            n = newNumber;
            console.log(`Multiplicador alterado para ${newNumber}`);
        }
    }
}

const multiplier = createMultiplier(4);

multiplier.multiply(3);
multiplier.multiply(4)
multiplier.updateMultiplier(2);
multiplier.multiply(1);

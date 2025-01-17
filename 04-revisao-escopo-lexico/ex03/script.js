/**
 * 3. Criando Contadores Independentes
Crie uma função createCounter que retorna um contador.
O contador deve ter duas funções internas:
•	increment: que aumenta o valor do contador em 1.
•	getValue: que retorna o valor atual do contador.
Teste criando dois contadores independentes e verifique se eles mantêm valores diferentes.
 * 
 */

const createCounter = () => {
    return {
        count: 0,

        increment() {
            this.count++;
        },

        getValue () {
            return this.count;
        }
    }
}

const counter = createCounter();
const counter2 = createCounter();

counter.increment();
counter.increment();
console.log(counter.getValue());

counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();

console.log(counter2.getValue());

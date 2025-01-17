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
    let count = 0; //antes o contator estava declarado como atributo do obj abaixo

    return {
       
        increment() {
           count++;
        },

        getValue () {
            return count;
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

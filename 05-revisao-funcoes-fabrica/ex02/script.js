// 2. Contador 
// Crie uma factory function chamada createCounter que retorna 
// um objeto com os métodos increment, decrement e getCount. O contador deve começar em zero.

//Primeira Forma
const createCounter = () => {
  let count = 0;

  return {
    getCount: () => count,

    increment() {
      count++;
    },

    decrement() {
      count--;
    }
  }
}

const count1 = createCounter();
const count2 = createCounter();

count1.increment();
count1.increment();

count2.increment();

console.log(count1.getCount());
console.log(count2.getCount());

//Segunda forma
// const createCounter = () => {
//   return {
//     count: 0,

//     increment() {
//       this.count++;
//     }
//   }
// }

// const count1 = createCounter();

// count1.increment();
// count1.increment();
// count1.increment();

// console.log(count1.count)

//Terceira forma

// function CreateCounter() {
//   this.count = 0;

//   return {
//     increment: () => {
//       this.count++;
//     }, 
//     decrement: () => {
//       this.count--;
//     },
//     getCounter: () => this.count
//   }
// }

// const count1 = new CreateCounter();
// const count2 = new CreateCounter();

// count1.increment();
// count1.increment();
// count1.increment();

// count2.increment();

// count1.decrement();

// console.log(count1.getCounter());
// console.log(count2.getCounter());
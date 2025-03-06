// 2. Contador 
// Crie uma factory function chamada createCounter que retorna 
// um objeto com os métodos increment, decrement e getCount. O contador deve começar em zero.

// const createCounter = () => {
//   let count = 0;

//   return {
//     getCount: () => count,

//     increment() {
//       count++;
//     },

//     decrement() {
//       count--;
//     }
//   }
// }

// const count1 = createCounter();
// const count2 = createCounter();

// count1.increment();
// count1.increment();

// count2.increment();

// console.log(count1.getCount());
// console.log(count2.getCount());

const createCounter = () => {
  return {
    count: 0,

    increment() {
      this.count++;
    }
  }
}

const count1 = createCounter();

count1.increment();
count1.increment();
count1.increment();

console.log(count1.count)

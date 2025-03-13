// 6. Criando um Gerador de ID Único
// Crie uma factory function chamada createIdGenerator que retorna um objeto com um método generate() que sempre gera um ID único (incremental).


const createIdGenerator = (() => {
  let id = 0;

  return () => {
    return {
      generate() {
        id++;
        return id;
      }
    }
  }

})();

const id = createIdGenerator();
const id2 = createIdGenerator();


console.log(id.generate());
console.log(id.generate());
console.log(id.generate());

console.log(id2.generate())
// 4. Banco de Dados Simples
// Crie uma factory function chamada createDatabase que retorne um objeto com métodos para adicionar, remover e listar itens (strings).

function createDatabase() {
  let items = [];

  return {
    adicionar: (item) => {
      if (typeof item != 'string' || (!item.trim())) {
        console.log('Item deve ser um nome');
        return;
      }

      let indice = items.findIndex((currentItem) => currentItem.toLowerCase() === item.toLowerCase());
      
      if(indice === -1){
        item = item.trim();
        items.push(item);
        console.log(`${item} adicionado(a) a lista de itens`);
      }
   
    },

    remover: (item) => {
      let i = items.findIndex((currentItem) => currentItem.toLowerCase() === item.toLowerCase());

      if(i === -1){
        console.log(`${item} não encontrado(a) na lista`);
        return;
      }

      items = items.filter((currentItem) => currentItem.toLowerCase() !== item.toLowerCase());
      console.log(`${item} removido da lista!`);
    },

    listar: () => {
      console.log("******Lista de Items******");
      items.length != 0 ? items.forEach((item) => console.log(item)) : console.log('Lista vazia!');
    }
  }
}

const db = createDatabase();

db.adicionar('Mochila');
db.adicionar('Lapis');
db.adicionar('Caderno');

db.remover('mochila');

db.adicionar('Estojo');
db.adicionar('estojo');
db.remover('caneta');


db.listar();


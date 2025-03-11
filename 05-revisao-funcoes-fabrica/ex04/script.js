// 4. Banco de Dados Simples
// Crie uma factory function chamada createDatabase que retorne um objeto com métodos para adicionar, remover e listar itens (strings).

function createDatabase () {
  let items = [];

  return {
    adicionar: (item) => {
      if(typeof item != 'string'){
        console.log('Item deve ser um nome');
        return;
      }

      items.push(item);
      console.log(`${item} adicionado(a) a lista de itens`);
    },

    remover: (item) => {
      items = items.filter((currentItem) => currentItem.toLowerCase() != item.toLowerCase());
      console.log(`${item} foi removido do registro de items`);
    },

    listar: () => {
      console.log("*******Lista de Items*******");
      items.length != 0 ? items.map((item) => console.log(item)) : console.log('Lista vazia!');
    }
  }
}

const db = createDatabase();

db.adicionar('Mochila');
db.adicionar('Lapis');
db.adicionar('Caderno');

db.remover('mochila');

db.adicionar('Estojo');

db.remover('Lapis');
db.remover('caderno');
db.remover('estojo');

db.listar();

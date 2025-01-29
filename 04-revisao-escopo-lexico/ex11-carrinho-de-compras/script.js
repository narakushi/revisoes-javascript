/**Um sistema para adicionar, remover e listar itens, além de calcular o total do carrinho. */

const createCart = () => {
    const itens = [];
    let total = 0;
    let index = -1;

    return {
        add: function (item) {
            console.log("******************");
            if (item.name && item.price) {
                itens.push(item);
                console.log(`${item.name} adicionando(a) ao carrinho.`);
                total += item.price;

                console.log(`Total: ${total.toFixed(2)}`);
            }
        },

        remove: function (name) {
            console.log("******************");
            for (i in itens) {
                if (itens[i].name.toUpperCase() == name.toUpperCase()) {
                    console.log(`${name} foi removida`);
                    index = i;
                    
                }

                if (index != -1) {
                    delete itens[index];
                    total -= itens[i].price;
                }
            }
            console.log(`Total: ${total.toFixed(2)}`);
        },

        listItens: function () {
            console.log("******************");
            console.log("Lista de itens no carrinho.");
            for (item of itens) {
                if (item) {
                    console.log(`${item.name}  ${item.price}`)
                }
            }
        }
    }
}

const cart = createCart();

cart.add({ name: "pasta", price: 29.9 });
cart.add({ name: "caneta", price: 29.9 });
cart.add({ name: "caderno", price: 37.9 });
cart.add({ name: "livro alta books", price: 37.9 });
cart.remove("caneta");

cart.listItens();
/**Um sistema para adicionar, remover e listar itens, além de calcular o total do carrinho. */

const createCart = () => {
    const itens = [];
    let total = 0;

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
            /** substitui um laço for com verificação if */
            let index = itens.findIndex((item) => item.name.toUpperCase() == name.toUpperCase());

            if (index != -1) {
                console.log(`${name} foi removido(a).`)
                //delete itens[index]; // não remove de verdade nem reordena o array, mantem um <empty> no lugar do valor.
                total -= itens[index].price;
                itens.splice(index, 1);
            }

            console.log(`Total: ${total.toFixed(2)}`);
        },

        listItens: function () {
            console.log("******************");
            console.log("Lista de itens no carrinho.");
            if (itens.length === 0) {
                console.log("Carrinho está vazio!");
            }
            else {
                for (item of itens) {
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
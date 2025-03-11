// 3. Produto
// Crie uma factory function chamada createProduct que receba um nome e um preço. O objeto retornado deve ter um método applyDiscount(percentual) que reduz o preço do produto de acordo com o percentual fornecido.

const createProduct = (name, price) => {
  return {
    name, 
    price,

    applyDiscount(percent) {
      if(percent < 0 || percent > 1) {
        console.log('Valor percentual inválido!');
        return;
      }

      this.price = this.price - (this.price * percent);
      console.log(`O produto ${this.name} recebeu o desconto de ${percent * 100}% e agora custa R$${(this.price).toFixed(2)} reais`); 
    }
  }
}

const p1 = createProduct('Gel capilar', 30);

p1.applyDiscount();
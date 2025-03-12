// // 5. Criando um Carro
// Crie uma factory function createCar que recebe marca e modelo e retorna um objeto com essas propriedades. O objeto deve ter um método drive() que exibe no console "Dirigindo o [marca] [modelo]".

const createCar = (marca, modelo) => {

  if (typeof marca !== "string" || typeof modelo !== "string") {
    console.log('Marca e modelo devem ser um nome!');
    return null;
  }

  return {
    marca,
    modelo,

    drive() {
      console.log(`Dirigindo o ${marca} ${modelo}`);
    }
  }
}

const car = createCar('fiat', 'uno');
const car2 = createCar(123, 'uno');

car.drive();
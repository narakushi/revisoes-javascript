/** testando uso de variavel declarada com var dentro de funções */
/*
const funcaoA = () => {
    var numero = 0;

    console.log(numero);
}

console.log(numero);*/

/*
1.	Escopo Léxico e Funções Aninhadas 
Crie uma função counter que tenha uma variável count e retorne uma função increment. 
A função increment deve aumentar o valor de count em 1 cada vez que for chamada. 
Mostre que o escopo léxico permite que a função interna acesse a variável count.
Dica: Use uma função aninhada para acessar o valor de count.*/

const counter = () => {
    let count = 0;

   function increment() {
        ++count;
        console.log(count);
    }

    return increment;
}

const increment = counter();

increment();
increment();
increment();



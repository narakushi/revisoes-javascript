/** exemplo da freecodecamp */
/*
const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
        console.log(myValue += 1);
    }

    childFunction();
}

myFunction();*/

const funcaoPai = () => {
    let contador = 0;

    const funcaoFilha = () => {
        contador++;
        console.log(contador);
    }

    funcaoFilha();
}

funcaoPai();

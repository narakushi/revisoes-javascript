/*const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
        console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
console.log(result);
result();
result();
result();*/

const funcaoPai = () => {
    let contador = 0;

    const funcaoFilha = () => {
        contador++;
        console.log(contador);
    }

    return funcaoFilha;
}

const funcaoFilhaExterna= funcaoPai();

funcaoFilhaExterna();
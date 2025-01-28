function createFunctions() {
    var functions = [];

    for (let i = 0; i < 3; i++) {
     
        functions.push(function () {
            return i;
        });
    }

    return functions;
}


const funcs = createFunctions();

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
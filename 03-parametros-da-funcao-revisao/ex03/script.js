/**
 * 3. Desestruturação de Parâmetros
 * Crie uma função chamada introduce que receba um objeto como parâmetro com as propriedades:
 *       name, age, e job.
 * Use a desestruturação para acessar os valores e retorne uma string no formato:
 * "Hi, I'm [name], a [age]-year-old [job]."
 * 
 */

const introduce = ({name="Unknow", age=0, job="unemployed"}) => {
    if(!name || !age || !job){
        return `Invalid input: name, age and job are required.`
    }
    return `Hi, i'm ${name}, a ${age}-year-old ${job}`
}

const person = {
    name: 'kaio',
    age: 25,
    job: 'Programmer'
}

console.log(introduce({name:'Tainá', age: 23, job: 'dev'})) // 1ª forma
console.log(introduce(person));// 2ª forma

//recomendações de melhorias: do chatgpt4
]
 
// adicionar valores fallback nos parâmetros (n tinha)
//adicionar uma validação para quando receber os valores (n tinha)
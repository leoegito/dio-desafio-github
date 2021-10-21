// Rest e Spread Operators
// rest operator: ...
function sum(...args){
    console.log(args);
    //args funciona como um array
    return args.reduce((acc, value) => acc + value, 0);
}

//spread operator ...
//strings, arrays, literal objects e objetos iteraveis
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const mult = (...rest) => {console.log(rest);return multiply(...rest)};

console.log(sum(5, 5, 5, 2, 3));
console.log(mult(5, 5, 5, 2, 3));

//spread em objetos literais para consumir outros objetos
const obj = {
    test: 'ola'
};

const obj2 = {
    ...obj,
    test2: "mundo"
};

console.log(obj2);

//gerar shadow clones do objeto ao inves de passar a referencia
const obj4 = {
    test: 678,
    subObj: {
        test: 123
    }
}
const obj3 = { ...obj4, subObj: { ...obj4.subObj } };
obj4.subObj.test = 111213;
console.log(obj3)

// --- Destructuring --- //
// Destructuring Assignment
var [apple, banana, orange, [tomato]] = ["Apple", "Banana", 'Orange', ['tomato']];

console.log(apple);
console.log(banana);
console.log(orange);
console.log(tomato);

//com objetos:
var objeto = {
    name: 'Leo',
    props: {
        age: 28
    }
}

//var { name } = objeto;
var { name: nome } = objeto;

var {
    props: { age }
} = objeto;

console.log(nome);
console.log(age);

//destructuring em functions
function soma([a, b] = [0, 0]){
    return a + b;
}

console.log(soma([5,10]));
console.log(soma());

//Arrow functions
//var sum = (a,b) => a+b; -> retorno implicito
var sum = (a, b) => { return a+b; };
console.log(sum(2,3));

//retornando objetos literais
var createObj = () => ({ test: 123 });
console.log(createObj());
//hoisting não funciona com arros functions

//contexto da arrow function é o contexto que "envolve" a função, não sendo necessário usar o bind

// --- Default Function Arguments  ---//
// Igual ao de outras linguagens
function multiply(a = 1, b = randomNumber()){
    return a * b;
}

console.log(multiply(8));
console.log(multiply(8));
//lazy evaluation
function randomNumber(){
    console.log("Generating random number...");
    return Math.random() * 10;
}

// --- Enhanced Object Literals --- //
var prop1 = 'Digital Innovation One';
function method1(){
    console.log("Method called.");
}
var obj = {
    prop1,
    method1,
    // sum: function sum(a, b){
    //     return a + b;
    // }
    sum(a, b) {
        return a + b;
    }
};

console.log(obj);
obj.method1();
console.log(obj.sum(1, 5));
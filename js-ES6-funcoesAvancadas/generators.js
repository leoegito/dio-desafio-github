//--- Symbols & Generators ---//
//Symbols
const uniqueId = Symbol();

const obj = {
    [uniqueId]: 'Hello'
};

// console.log(uniqueId);
console.log(obj);

// Well know symbols
// Symbol.iterator, Symbol.split, Symbol.toStringTag

// Generators
function * hello(){
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function.');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

const objeto = {
    values : [1,2,3,4],
    *[Symbol.iterator]() {
        for(var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for(let value of objeto){
    console.log(value);
}
const persons = Array.of("Leo", "Maryna", "John", "Silver", "Hawk")
console.log(persons)

//Array
//Array.from -> espera um array-like (node list) ou iterable object (set, map)

//inserir ou remover elementos
//inserir no final - push
persons.push("Carcara");
console.log(persons);

//pop -> remove e retorna o último item
persons.pop();
console.log(persons);

//unshift - adiciona no começo do array
persons.unshift("Logan")
console.log(persons)

//concat - conecatena um ou mais arrays, retornando um NOVO array
const salgados = ["Coxinha", "Kibe", "Empada", "Joelho"]

const tudo = persons.concat(salgados);

console.log(tudo);

//slice - retorna um novo array fatiando de acordo com inicio e fim
console.log(tudo.slice(0, 4));
console.log(tudo.slice(-1));

//splice - remove a partir do informado, mas altera o array por referencia, o original
tudo.splice(3);
console.log(tudo);
    //usando para adicionar itens no "meio" do array existente
    tudo.splice(2, 0, "Humano");
    //-> remover a partir da posição 2, 0 elementos
    console.log(tudo);

// ---- Iterando, buscando e transformando elementos ---- //
//forEach
const arr = [1, 2, 3, 4, 5];
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

//map -> retorna um novo array desse array enquanto itera
console.log(arr.map(value => value * 2));
const novoArray = arr.map((index, value) => `${index} - ${value*2}`);
console.log(novoArray);

//flat - retorna um novo array com todos os elementos de um sub-array concatenados
//de forma recursiva de acordo com a profundidade especficiada (depth)
const arr2 = [1, 2, [3, 4]];
console.log(arr2);
const novoArr2 = arr2.flat();

console.log(novoArr2);

//flatMap - junção das duas
//keys -> retorna um array iterator com as chaves de um array
//const arrIterator = arr.keys(); arrIterator.next();
//values

// -- Buscar elementos -- //
//find
const firstGreaterThanTwo = arr.find(value => value > 2);
console.log(firstGreaterThanTwo);

//findIndex - mesma coisa que o find mas retorna o indice ao inves do valor

//filter -> Retorna aum novo array com todos os elementos que staisfazem a condição
const allGreaterThanTwo = arr.filter(value => value > 2);
console.log(allGreaterThanTwo);

//indexOf
//lastIndexOf

//includes -> booleano verificando se o elemento está no array

//some -> se algum valor do array atende a condição especificada
const students = [{name:"Leo", grade: 8}, {name:"Maryna", grade:6}];
console.log(students.some(student => student.grade >= 7));

//every

//sort -> ordena elementos do array de acordo com uma condição
console.log(students.sort((current, next) => current.grade - next.grade));
console.log(students.sort((current, next) => next.grade - current.grade));

//reverse -> inverte a ordem de um array

//join("delimitador")

//reduce -> retorna um novo tipo de dado iterando cada posição de um array
console.log(arr.reduce((total, value) => total += value, 0));

const totalNotas = students.reduce((totalGrades, student) => totalGrades += student.grade, 0);
console.log('Soma das notas: ' +totalNotas);
const media = students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length;
console.log("Media das notas: " +media);
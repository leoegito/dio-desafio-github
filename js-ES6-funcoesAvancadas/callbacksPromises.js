// promises
const doSomethingPromise = new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        //did something
        resolve('Second data');
    }, 1000);
});

//doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));
// console.log(doSomethingPromise);
doSomethingPromise
    .then(data => {console.log(data); return doOtherThingPromise})
    .then(data2 => console.log(data2))
    .catch(error => console.log('Oops... ', error));

// Pending
// Fulfilled
// Rejected

//Promise.all() ->
// Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => { console.log(data); });
// Promise.race()

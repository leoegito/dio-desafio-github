//import fetch from 'cross-fetch';
//import * as fetch from 'node-fetch';
//const fetch = require("node-fetch");
// var fetch = require("node-fetch");
//Não funcionou corretamente
fetch('http://localhost:5500/data.json').then(responseStream => {
    if(responseStream.status === 200){
        return responseStream.json();
    } else{
        throw new Error('Request Error');
    }
    // responseStream.json().then(data => {
    //     console.log(data);
    // });
}).then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Error: ', err);
});
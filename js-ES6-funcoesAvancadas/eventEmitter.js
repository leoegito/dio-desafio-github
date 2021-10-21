const EvenetEmitter = require('events');
const { EventEmitter } = require('stream');

class Users extends EvenetEmitter{
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Leonardo Egito' });
users.userLogged({ user: 'Maryna Egito' });

// emitter.on('User logged', data => {
//     console.log(data);
// });
// emitter.emit('User logged', { user: 'Leonardo' });

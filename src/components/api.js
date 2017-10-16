require('es6-promise').polyfill();
require('isomorphic-fetch');

class User {
    static getUsers(){
        return fetch('https://randomuser.me/api/?results=10')
        .then(results => results.json()).catch(err => err)
    }
    
} 

export default User
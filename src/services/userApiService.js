import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

export function login(data){
    console.log(data);
    console.log('login');
    console.log(mcpApiEndpoint + 'login');
    return new Promise(
        function(resolve, reject){
            const dataSignIn = {
                "username": data.username,
                "password": data.password,
            }
            axios.post(mcpApiEndpoint + 'login', dataSignIn,
            {
                headers:{
                    'Accept' : 'application/json'
                },
            }).then(function(res){
                console.log('login', res)
                return resolve(res)
            })
            .catch(function(err){
                console.log('login', err)
                return reject(err)
            })
        }
    )
}

export function registration(data){
    console.log(data);
    console.log('registration');
    console.log(mcpApiEndpoint + 'users');
    return new Promise(
        function(resolve, reject){
            const dataSignUp = {
                "firstName": data.firstName,
                "lastName": data.lastName,
                "email": data.username,
                "password": data.password
            }
            axios.post(mcpApiEndpoint + 'users', dataSignUp,
            {
                headers:{
                    'Accept' : 'application/json'
                },
            }).then(function(res){
                console.log('registration', res)
                return resolve(res)
            })
            .catch(function(err){
                console.log('registration', err)
                return reject(err)
            })
        }
    )
}


export function getUser(id){
    console.log('getUser');
    console.log(mcpApiEndpoint + 'users/' + id);
    return new Promise(
        function(resolve, reject){
            axios.get(mcpApiEndpoint + 'users/' + id,
            {
                headers:{
                    'Accept' : 'application/json'
                },
            }).then(function(res){
                console.log('getUser', res)
                return resolve(res)
            })
            .catch(function(err){
                console.log('getUser', err)
                return reject(err)
            })
        }
    )
}

export function getAllUsers(){
    console.log('getAllUsers');
    console.log(mcpApiEndpoint + 'users');
    return new Promise(
        function(resolve, reject){
            axios.get(mcpApiEndpoint + 'users',
            {
                headers:{
                    'Accept' : 'application/json'
                },
            }).then(function(res){
                console.log('getAllUsers', res)
                return resolve(res)
            })
            .catch(function(err){
                console.log('getAllUsers', err)
                return reject(err)
            })
        }
    )
}



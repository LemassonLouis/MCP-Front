import axios from "axios";

const mcpApiEndpoint = 'http://localhost:8080/api/'

export function getUser(){
    console.log('getUser');
    console.log(mcpApiEndpoint + 'users/17');
    return new Promise(
        function(resolve, reject){
            axios.get(mcpApiEndpoint + 'users/17',
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



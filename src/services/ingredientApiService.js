import axios from "axios";

const mcpApiEndpoint = 'http://localhost:8080/api/'

export function getAllIngredients(){
    console.log('getAllIngredients');
    console.log(mcpApiEndpoint + 'ingredients');
    return new Promise(
        function(resolve, reject){
            axios.get(mcpApiEndpoint + 'ingredients',
            {
                headers:{
                    'Accept' : 'application/json'
                },
            }).then(function(res){
                console.log('getAllIngredients', res)
                return resolve(res)
            })
            .catch(function(err){
                console.log('getAllIngredients', err)
                return reject(err)
            })
        }
    )
}


export function postIngredient(ingredient){
    console.log(ingredient);
    console.log('postIngredient');
    console.log(mcpApiEndpoint + 'ingredients');
    return new Promise(
        function(resolve, reject){
            const data = {
                "iNGName": ingredient.name,
                "iNGAllergen": ingredient.allergen,
                "iNGVege": ingredient.vege,
                "iNGUnit": ingredient.unit,
                "iNGPrice": ingredient.price,
                "iNGIsArchive": ingredient.archive,
                // "seasons": ingredient.season
            }
            axios.post(mcpApiEndpoint + 'ingredients', data ,
            {
                headers:{
                    'Accept' : 'application/json'
                },
            }).then(function(res){
                console.log('postIngredient', res)
                return resolve(res)
            })
            .catch(function(err){
                console.log('postIngredient', err)
                return reject(err)
            })
        }
    )
}


export function removeIngredient(id){
    console.log('deleteIngredient');
    console.log(mcpApiEndpoint + 'ingredients/' + id);
    return new Promise(
        function(resolve, reject){
            axios.delete(mcpApiEndpoint + 'ingredients/' + id,
            {
                headers:{
                    'Accept' : 'application/json'
                },
            }).then(function(res){
                console.log('removeIngredient', res)
                return resolve(res)
            })
            .catch(function(err){
                console.log('removeIngredient', err)
                return reject(err)
            })
        }
    )
}

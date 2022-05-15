/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-05-07 14:11:03
 * @modify date 2022-05-08 13:12:11
 * @desc [description]
 */
import axios from "axios";

const TAG = "recipe";
const RECIPES = process.env.REACT_APP_RECIPES;


export function getAllRecipes(isTechnic) {
console.log("getAll" + TAG);

console.log(RECIPES + `?REC_isTechnic=${isTechnic}`);
return new Promise(function (resolve, reject) {
    axios
    .get(RECIPES + `?REC_isTechnic=${isTechnic}`, {
        headers: {
        Accept: "application/json",
        },
    })
    .then(function (res) {
        console.log("getAll"+ TAG, res);
        return resolve(res);
    })
    .catch(function (err) {
        console.log("getAll" + TAG, err);
        return reject(err);
    });
});
}

export function postRecipe(ingredient) {
    console.log(ingredient);
    console.log("post" + TAG);
    console.log(RECIPES);
    return new Promise(function (resolve, reject) {
        const data = {
        
        };
        axios
        .post(RECIPES, data, {
            headers: {
            Accept: "application/json",
            },
        })
        .then(function (res) {
            console.log("post" + TAG, res);
            return resolve(res);
        })
        .catch(function (err) {
            console.log("post" + TAG, err);
            return reject(err);
        });
    });
}

export function editRecipe(ingredient, id) {
    console.log(ingredient);
    console.log("put" + TAG);
    console.log(RECIPES + "/" + id);
    return new Promise(function (resolve, reject) {
        const data = {
        
        };
        axios
        .put(RECIPES + "/" + id, data, {
            headers: {
            Accept: "application/json",
            },
        })
        .then(function (res) {
            console.log("put" + TAG, res);
            return resolve(res);
        })
        .catch(function (err) {
            console.log("put" + TAG, err);
            return reject(err);
        });
    });
}

export function removeRecipe(id) {
    console.log("remove" + TAG);
    console.log(RECIPES + "/" + id);
    return new Promise(function (resolve, reject) {
        axios
        .delete(RECIPES + "/" + id, {
            headers: {
            Accept: "application/json",
            },
        })
        .then(function (res) {
            console.log("remove" + TAG, res);
            return resolve(res);
        })
        .catch(function (err) {
            console.log("remove" + TAG, err);
            return reject(err);
        });
    });
}

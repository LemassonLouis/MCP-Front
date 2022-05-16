/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:26:29
 * @modify date 2022-05-14 16:04:27
 * @desc [description]
 */
import axios from "axios";

const INGREDIENTS = process.env.REACT_APP_INGREDIENTS;

const TAG = "ingredients"

export function getAllIngredients({vege, allergen}) {
  console.log("getAll" + TAG);

  console.log(INGREDIENTS + `?ING_vege=${vege}&ING_allergen=${allergen}`)
  return new Promise(function (resolve, reject) {
    axios
      .get(INGREDIENTS + `?ING_vege=${vege}&ING_allergen=${allergen}`, {
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

export function getIngredients() {
  console.log("getAll" + TAG);

  console.log(INGREDIENTS)
  return new Promise(function (resolve, reject) {
    axios
      .get(INGREDIENTS, {
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

export function postIngredient(ingredient) {
  console.log(ingredient);
  console.log("post" + TAG);
  console.log(INGREDIENTS);
  return new Promise(function (resolve, reject) {
    const data = {
      iNGName: ingredient.name,
      iNGAllergen: ingredient.allergen,
      iNGVege: ingredient.vege,
      iNGUnit: ingredient.unit,
      iNGPrice: ingredient.price,
      iNGIsArchive: ingredient.archive,
      categories: ingredient.categories,
    };
    console.log(data);
    axios
      .post(INGREDIENTS, data, {
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

export function editIngredient(ingredient, id) {
  console.log(ingredient);
  console.log("put" + TAG);
  console.log(INGREDIENTS + "/" + id);
  return new Promise(function (resolve, reject) {
    const data = {
      iNGName: ingredient.name,
      iNGAllergen: ingredient.allergen,
      iNGVege: ingredient.vege,
      iNGUnit: ingredient.unit,
      iNGPrice: ingredient.price,
      iNGIsArchive: ingredient.archive,
    };
    axios
      .put(INGREDIENTS + "/" + id, data, {
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

export function removeIngredient(id) {
  console.log("remove" + TAG);
  console.log(INGREDIENTS + "/" + id);
  return new Promise(function (resolve, reject) {
    axios
      .delete(INGREDIENTS + "/" + id, {
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

import axios from "axios";

const INGREDIENTS = process.env.REACT_APP_INGREDIENTS;

const TAG = "ingredients"

export function getAllIngredients() {
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
      // "seasons": ingredient.season
    };
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

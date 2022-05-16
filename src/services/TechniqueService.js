/**
 * @author Jérémie Fauveau
 * @create date 2022-05-07 14:11:03
 * @modify date 2022-05-15 14:37:19
 * @desc [description]
 */
import axios from "axios";

const TAG = "technique";
const TECHNIQUES = process.env.REACT_APP_TECHNIQUES;

export function getAllTechniques(isTechnic) {
  console.log("getAll" + TAG);

  console.log(TECHNIQUES + `?isTechnic=${isTechnic}`);
  return new Promise(function (resolve, reject) {
    axios
      .get(TECHNIQUES + `?isTechnic=${isTechnic}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (res) {
        console.log("getAll" + TAG, res);
        return resolve(res);
      })
      .catch(function (err) {
        console.log("getAll" + TAG, err);
        return reject(err);
      });
  });
}

export function postTechnique(technique) {
  console.log(technique);
  console.log("post" + TAG);
  console.log(TECHNIQUES);
  return new Promise(function (resolve, reject) {
    const data = {
      name: technique.name,
      comment: technique.comment,
      moment: technique.moment,
      duration: technique.duration,
      isTechnic: technique.isTechnic,
      categories: technique.categories,
    };
    axios
      .post(TECHNIQUES, data, {
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

export function editTechnique(ingredient, id) {
  console.log("put" + TAG);
  console.log(TECHNIQUES + "/" + id);
  return new Promise(function (resolve, reject) {
    const data = {};
    axios
      .put(TECHNIQUES + "/" + id, data, {
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

export function removeTechniques(id) {
  console.log("remove" + TAG);
  console.log(TECHNIQUES + "/" + id);
  return new Promise(function (resolve, reject) {
    axios
      .delete(TECHNIQUES + "/" + id, {
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

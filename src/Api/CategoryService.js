import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

export function getAllCategories() {
  return new Promise(function (resolve, reject) {
    axios
      .get(mcpApiEndpoint + "categories", {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (res) {
        console.log("categories : ", res);
        return resolve(res);
      })
      .catch(function (err) {
        return reject(err);
      });
  });
}

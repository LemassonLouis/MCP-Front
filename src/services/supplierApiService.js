import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

export function getAllSuppliers() {
  console.log("getAllSuppliers");
  console.log(mcpApiEndpoint + "suppliers");
  return new Promise(function (resolve, reject) {
    axios
      .get(mcpApiEndpoint + "suppliers", {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (res) {
        console.log("getAllSuplliers", res);
        return resolve(res);
      })
      .catch(function (err) {
        console.log("getAllSuplliers", err);
        return reject(err);
      });
  });
}

export function postSupplier(supplier) {
  console.log(supplier);
  console.log("postSupplier");
  console.log(mcpApiEndpoint + "suppliers");
  return new Promise(function (resolve, reject) {
    const data = {
      SUPName: supplier.name,
      SUPAllergen: supplier.allergen,
      SUPVege: supplier.vege,
      SUPUnit: supplier.unit,
      iSUPrice: supplier.price,
      iSUPIsArchive: supplier.archive,
    };
    axios
      .post(mcpApiEndpoint + "suppliers", data, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (res) {
        console.log("postSupplier", res);
        return resolve(res);
      })
      .catch(function (err) {
        console.log("postSupplier", err);
        return reject(err);
      });
  });
}

export function removeSupplier(id) {
  console.log("deleteSupplier");
  console.log(mcpApiEndpoint + "suppliers/" + id);
  return new Promise(function (resolve, reject) {
    axios
      .delete(mcpApiEndpoint + "suppliers/" + id, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (res) {
        console.log("removeIngredient", res);
        return resolve(res);
      })
      .catch(function (err) {
        console.log("removeSupplier", err);
        return reject(err);
      });
  });
}

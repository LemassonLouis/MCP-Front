import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

/**
 * Get an image from the API.
 * @param {Int} imageID - Int who define the id of the image.
 * @returns {Promise} Promise.req
 */
export function getImage(imageID) {

  return new Promise((resolve, reject) => {
    axios
      .get(mcpApiEndpoint + "images" + "/" + imageID, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
}


/**
 * Post an image to the API.
 * @param {Object} imageData - Object Image who define the image data.
 * @param {String} image.file - String who define the image file.
 * @param {Int} image.userID - Int who define the image user id creator.
 * @returns {Promise} Promise.req
 */
export function postImage(imageData) {

  let formData = new FormData();
  formData.append('file', imageData.file);
  formData.append('iMGCreatedBy', mcpApiEndpoint + "users/" + imageData.userID);

  return new Promise((resolve, reject) => {

    axios
      .post(mcpApiEndpoint + "images", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
      })
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
}


/**
 * Delete an image from the API.
 * @param {Int} imageID - Int who define the id of the image.
 * @returns {Promise} Promise.req
 */
export function deleteImage(imageID) {

  return new Promise((resolve, reject) => {
    axios
      .delete(mcpApiEndpoint + "images" + "/" + imageID, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => {
        return resolve(res);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

/**
 * Get an image from the API.
 * @param {Number} imageID - Int who define the id of the image.
 * @returns {Promise} Promise.req
 */
export function getImage(imageID) {

  console.log("getImage()", mcpApiEndpoint + "images" + "/" + imageID);

  return new Promise((resolve, reject) => {
    axios
      .get(mcpApiEndpoint + "images" + "/" + imageID, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => {
        console.log("getImage() / res", res);
        return resolve(res);
      })
      .catch(err => {
        console.log("getImage() / err", err);
        return reject(err);
      });
  });
}


/**
 * Post an image to the API.
 * @param {String} imageURL - String who define the URL of the image.
 * @returns {Promise} Promise.req
 */
export function postImage(imageURL) {

  console.log("postImage()", mcpApiEndpoint + "images");
  console.log("imageURL", imageURL);

  return new Promise((resolve, reject) => {

    const data = {
      iMGUri: imageURL
    };

    axios
      .post(mcpApiEndpoint + "images", data, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => {
        console.log("postImage() / res", res);
        return resolve(res);
      })
      .catch(err => {
        console.log("postImage() / err", err);
        return reject(err);
      });
  });
}


/**
 * Delete an image from the API.
 * @param {Number} imageID - Int who define the id of the image.
 * @returns {Promise} Promise.req
 */
export function removeImage(imageID) {

  console.log("removeImage()", mcpApiEndpoint + "images" + "/" + imageID);

  return new Promise((resolve, reject) => {
    axios
      .delete(mcpApiEndpoint + "images" + "/" + imageID, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => {
        console.log("removeImage() / res", res);
        return resolve(res);
      })
      .catch(err => {
        console.log("removeImage() / err", err);
        return reject(err);
      });
  });
}

import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

/**
 * Get an image from the API.
 * @param {Int} imageID - Int who define the id of the image.
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
 * @param {Object} image - Object Image who define the image.
 * @param {String} image.URI - String who define the image uri.
 * @param {Int} image.created_by - Int who define the image user id creator.
 * @param {DateISOString} image.created_at - DateISOString who define the image date od creation.
 * @returns {Promise} Promise.req
 */
export function postImage(image) {

  console.log("postImage()", mcpApiEndpoint + "images");
  console.log("image", image);

  return new Promise((resolve, reject) => {

    const data = {
      iMGUri: image.URI,
      iMGCreatedBy: mcpApiEndpoint + "users/" + image.created_by,
      iMGCreatedAt: image.created_at
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
 * @param {Int} imageID - Int who define the id of the image.
 * @returns {Promise} Promise.req
 */
export function deleteImage(imageID) {

  console.log("deleteImage()", mcpApiEndpoint + "images" + "/" + imageID);

  return new Promise((resolve, reject) => {
    axios
      .delete(mcpApiEndpoint + "images" + "/" + imageID, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(res => {
        console.log("deleteImage() / res", res);
        return resolve(res);
      })
      .catch(err => {
        console.log("deleteImage() / err", err);
        return reject(err);
      });
  });
}

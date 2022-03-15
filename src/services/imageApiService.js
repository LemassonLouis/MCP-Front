import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

export function getAllImages() {

  console.log("getAllImages()", mcpApiEndpoint + "images");

  return new Promise(function (resolve, reject) {
    axios
      .get(mcpApiEndpoint + "images", {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (res) {
        console.log("getAllImages() / res", res);
        return resolve(res);
      })
      .catch(function (err) {
        console.log("getAllImages() / err", err);
        return reject(err);
      });
  });
}

// export function getImage(imageID) {

//   console.log("getImage()", mcpApiEndpoint + "images" + imageID);

//   return new Promise(function (resolve, reject) {
//     axios
//       .get(mcpApiEndpoint + "images" + "/" + imageID, {
//         headers: {
//           Accept: "application/json",
//         },
//       })
//       .then(function (res) {
//         console.log("getImage() / res", res);
//         return resolve(res);
//       })
//       .catch(function (err) {
//         console.log("getImage() / err", err);
//         return reject(err);
//       });
//   });
// }

// export function postImage(image) {

//   console.log("postImage()", mcpApiEndpoint + "images");
//   console.log("image", image);

//   return new Promise(function (resolve, reject) {

//     const data = {
//       iMGName: image.name,
//       iMGURL: image.url,
//     };

//     axios
//       .post(mcpApiEndpoint + "images", data, {
//         headers: {
//           Accept: "application/json",
//         },
//       })
//       .then(function (res) {
//         console.log("postImage() / res", res);
//         return resolve(res);
//       })
//       .catch(function (err) {
//         console.log("postImage() / err", err);
//         return reject(err);
//       });
//   });
// }

// export function removeImage(imageID) {

//   console.log("removeImage()", mcpApiEndpoint + "images" + imageID);

//   return new Promise(function (resolve, reject) {
//     axios
//       .delete(mcpApiEndpoint + "images" + "/" + imageID, {
//         headers: {
//           Accept: "application/json",
//         },
//       })
//       .then(function (res) {
//         console.log("removeImage() / res", res);
//         return resolve(res);
//       })
//       .catch(function (err) {
//         console.log("removeImage() / err", err);
//         return reject(err);
//       });
//   });
// }

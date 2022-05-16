/**
 * @author Genouel Vincent
 * @email genouel.vincent@gmail.com
 * @create date 2022-05-08 16:22:07
 * @modify date 2022-05-08 16:22:09
 * @desc [description]
 */

import axios from "axios";

const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

export const apiConfig = {
  baseURL: mcpApiEndpoint,
  headers: {
    Accept: "application/json",
  },
  token: () => undefined,
  errorHandler: () => {},
};

const axiosInstance = axios.create(apiConfig);
// const mcpApiEndpoint = process.env.REACT_APP_ENDPOINT;

export const getAll = async (uri, options) => {
  try {
    const response = await axiosInstance.get(uri, {
      params: {
        ...options,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const post = async (uri, data) => {
  try {
    const response = await axiosInstance.post(uri, data);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const deleteById = async (uri, data) => {
  try {
    const response = await axiosInstance.delete(uri, data);
    return response;
  } catch (err) {
    return err;
  }
};

import axios from "axios";
import { reject } from "lodash";

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

import { deleteById, getAll, post } from "./mcpApi";

export const getAllCategories = async (options) =>
  getAll(`/categories`, options);

export const createCategory = async (data) => post(`/categories`, data);

export const deleteCategory = async (categoryId) =>
  deleteById(`/categories/${categoryId}`);

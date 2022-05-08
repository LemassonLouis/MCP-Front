/**
 * @author Genouel Vincent
 * @email genouel.vincent@gmail.com
 * @create date 2022-05-08 16:21:24
 * @modify date 2022-05-08 16:21:26
 * @desc [description]
 */

import { deleteById, getAll, post } from "./mcpApi";

export const getAllCategories = async (options) =>
  getAll(`/categories`, options);

export const createCategory = async (data) => post(`/categories`, data);

export const deleteCategory = async (categoryId) =>
  deleteById(`/categories/${categoryId}`);

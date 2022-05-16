/**
 * @author Jérémie Fauveau
 * @create date 2022-05-15 22:06:58
 * @modify date 2022-05-15 22:06:58
 * @desc [description]
 */

import { deleteById, getAll, post } from "./mcpApi";

export const getAllSuppliers = async (options) =>
  getAll(`/suppliers`, options);

export const createSupplier = async (data) => post(`/suppliers`, data);

export const deleteSupplier = async (supplierId) =>
  deleteById(`/suppliers/${supplierId}`);

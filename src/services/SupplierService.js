import { deleteById, getAll, post } from "./mcpApi";

export const getAllSuppliers = async (options) =>
  getAll(`/suppliers`, options);

export const createSupplier = async (data) => post(`/suppliers`, data);

export const deleteSupplier = async (supplierId) =>
  deleteById(`/suppliers/${supplierId}`);

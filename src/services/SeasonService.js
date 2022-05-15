/**
 * @author Hofmann Nicolas
 **/
import { deleteById, getAll, post } from "./mcpApi";

export const getAllSeasons = async (options) =>
    getAll(`/seasons`, options);

export const createSeason = async (data) => post(`/seasons`, data);

export const deleteSeason = async (seasonId) =>
    deleteById(`/seasons/${seasonId}`);

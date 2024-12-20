import { ITimeSeriesQuery } from "../interfaces";
import { delay } from "../utils";
import { axiosClient } from "./axios.service";

export const ApiService = {
  getHeadquarters: async () => {
    await delay(3000);
    return axiosClient.get("/headquarters");
  },
  getRooms: async (headquarterId?: string) => {
    await delay(3000);
    return axiosClient.get("/rooms", { params: { headquarterId } });
  },
  getElectricityMeters: async (headquarterId?: string) => {
    await delay(3000);
    return axiosClient.get("/electricityMeters", {
      params: {
        headquarterId,
      },
    });
  },
  getTimeSeries: async (query: ITimeSeriesQuery) => {
    await delay(3000);
    return axiosClient.get("/timeSeries", { params: query });
  },
  getTimeSeriesById: async (id?: string) => {
    await delay(3000);
    return axiosClient.get(`/timeSeries/${id}`);
  },
};

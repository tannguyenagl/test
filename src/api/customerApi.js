import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = `/customers`;
  return axiosClient.get(url);
};

export const getCustomer = (id) => {
  const url = `/customers/${id}`;
  return axiosClient.get(url);
};

export const createCustomer = (data) => {
  const url = `/customers`;
  return axiosClient.post(url, data);
};

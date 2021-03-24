import axios from "./axios";

export const getProducts = async (params) => {
  try {
    return await axios.get("/products", { params });
  } catch (error) {
    throw error;
  }
};
export const getProduct = async (id) => {
  try {
    return await axios.get(`/products/${id}`);
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`/products/${id}`);
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (values) => {
  try {
    return await axios.post(`/products`, values);
  } catch (error) {
    throw error;
  }
};
export const editProduct = async (values, id) => {
  try {
    return await axios.put(`/products/${id}`, values);
  } catch (error) {
    throw error;
  }
};

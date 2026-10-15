import api from "./api";

export const get_products = async (filters = {}) => {
  try {
    const response = await api.get("products/", { params: filters });
    const products = response.data.results;
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const get_product = async (product_id) => {
  try {
    const response = await api.get(`products/product/${product_id}`);
    const product = response.data;
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const get_brands = async () => {
  try {
    const response = await api.get("products/brands/");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const get_styles = async () => {
  try {
    const response = await api.get("products/styles/");
    console.log("styles from api", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const get_happy_reviews = async () => {
  try {
    const response = await api.get("products/happy-reviews");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const get_reviews = async ({ id }) => {
  try {
    const response = await api.get(`products/reviews/${id}`, {
      params: { product_id: id },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

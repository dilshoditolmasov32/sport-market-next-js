import API_URL from "../api/interseptor";

export const getProductsData = async (params: unknown) => {
  try {
    const response = await API_URL.get("/products", { params });
    return response?.data?.products;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const singleProductData = async (id: string | undefined | null) => {
  try {
    const response = await API_URL.get(`/product/${id}`);
    return response?.data;
  } catch (error) {
    console.error( error);
    return null;
  }
};

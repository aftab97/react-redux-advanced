import Axios from "axios";
import env from "../config/env";
import ProductsService from "../services/products.service";

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECIEVE_PRODUCTS = "RECIEVE_PRODUCTS";
export const ERROR_PRODUCTS = "ERROR_PRODUCTS";

const productsService = new ProductsService();

const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

const recieve = (products) => ({
  type: RECIEVE_PRODUCTS,
  payload: products,
});

const errorProducts = (error) => ({
  type: ERROR_PRODUCTS,
  payload: error,
});

export const requestProductsAction = (filters, category) => {
  return async (dispatch) => {
    // first step
    console.log("requesting products");
    console.log(env);
    dispatch(requestProducts());

    try {
      const { data } = await productsService.getProducts(filters, category);
      dispatch(recieve(data));
    } catch (error) {
      console.log(error);
      dispatch(errorProducts(error));
    }
  };
};

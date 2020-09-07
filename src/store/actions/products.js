import { FIREBASE_URL } from "../../components/constants/config";
import { callApi } from "./ApiStore";
import {
  fetchProductApi,
  fetchProductsApi,
  addProductApi,
  updateProductApi,
} from "../apis/ProductsApi";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const fetchProduct = (id) => async (dispatch) => {
  try {
    const { error, ...product } = await callApi(fetchProductApi(id));
    if (error) {
      return dispatch(error);
    }
    dispatch({
      type: SET_PRODUCTS,
      payload: { [id]: { ...product, id } },
    });
  } catch (e) {
    console.log(e);
  }
};
export const fetchProducts = () => async (dispatch) => {
  try {
    const { error, ...products } = await callApi(fetchProductsApi());
    if (error) {
      return dispatch(error);
    }
    dispatch({
      type: SET_PRODUCTS,
      payload: Object.keys(products).reduce(
        (acc, id) => ({
          ...acc,
          [id]: { ...products[id], id },
        }),
        {}
      ),
    });
  } catch (e) {
    console.log(e);
  }
};

export const addProduct = (product) => async (dispatch, getState) => {
  try {
    const { error, name } = await callApi(addProductApi(product));
    if (error) {
      return dispatch(error);
    }
    await dispatch({ type: ADD_PRODUCT, payload: { ...product, id: name } });
  } catch (e) {
    console.log(e);
  }
};

export const updateProduct = ({ price, ...product }) => async (
  dispatch,
  getState
) => {
  try {
    const { error } = callApi(updateProductApi(product));
    if (error) {
      return dispatch(error);
    }

    dispatch({ type: EDIT_PRODUCT, payload: product });
  } catch (e) {
    console.log(e);
  }
};

export const removeProduct = (pid) => async (dispatch) => {
  try {
    const url = `${FIREBASE_URL}/products/${pid}.json`;

    await fetch(url, {
      method: "DELETE",
    });

    dispatch({ type: REMOVE_PRODUCT, payload: pid });
  } catch (e) {
    console.log(e);
  }
};
export const setSearchTerm = (term) => {
  return { type: SET_SEARCH_TERM, payload: term };
};

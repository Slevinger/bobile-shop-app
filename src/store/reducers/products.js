import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  SET_SEARCH_TERM,
  SET_PRODUCTS,
} from "../actions/products";
import Product from "../../models/product";
import { omit } from "lodash";

const initialState = {
  searchTerm: "",
  products: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...initialState, products: { ...payload } };
    case ADD_PRODUCT:
    case EDIT_PRODUCT:
      return {
        ...state,
        products: { ...state.products, [payload.id]: payload },
      };
    case REMOVE_PRODUCT:
      return { ...state, products: omit(state.products, payload) };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
};

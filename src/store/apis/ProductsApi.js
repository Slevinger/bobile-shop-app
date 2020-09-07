import { FIREBASE_URL } from "./config";

export const fetchProductApi = (id) => ({
  url: FIREBASE_URL + `/products/${id}.json`,
});

export const fetchProductsApi = () => ({
  url: FIREBASE_URL + `/products.json`,
});

export const addProductApi = (product) => ({
  url: FIREBASE_URL + `/products.json`,
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(product),
});

export const updateProductApi = (product) => ({
  url: `${FIREBASE_URL}/products/${product.id}.json`,
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(product),
});

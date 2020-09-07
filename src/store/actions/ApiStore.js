import { getStoreError } from "../utils/errorManager";
import { trackPromise } from "react-promise-tracker";
import { ADD_ERROR } from "./errors";

export const callApi = async ({ url, ...options }, callback) => {
  try {
    const response = await trackPromise(fetch(url, options));

    const responseData = await trackPromise(response.json());

    const { error } = responseData;
    if (error) {
      const storeError = getStoreError(error); // {type,message}
      return {
        error: {
          type: ADD_ERROR,
          payload: storeError,
        },
      };
    }
    if (callback) {
      callback(responseData);
    } else {
      return responseData;
    }
  } catch (e) {
    console.log(e);
  }
};

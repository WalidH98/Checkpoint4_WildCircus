import { FETCH_PRODUCTS, FETCH_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../types/product';
import Axios from 'axios';

export const fetchProducts = () => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      dispatch({ type: FETCH_PRODUCTS, payload: response.data.product });
    }
    function onError(error) {

    }

    try {
      const response = await Axios.get('/products');
      onSuccess(response)
    }
    catch (err) {
      onError(err)
    }
  };
};

export const showProduct = (productId) => {
  return async function (dispatch, getState) {
    function onSuccess(response) {
      dispatch({ type: FETCH_PRODUCT, payload: response.data.product });
    }
    function onError(error) {

    }

    try {
      const response = await Axios.get(`/products/${productId}`);
      onSuccess(response)
    }
    catch (err) {
      onError(err)
    }
  };
};
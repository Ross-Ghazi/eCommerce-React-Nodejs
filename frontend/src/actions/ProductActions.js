import axios from "axios";
import {
  PRODCUT_LIST_REQUEST,
  PRODCUT_LIST_SUCCESS,
  PRODCUT_LIST_FAIL,
  PRODCUT_DETAIL_REQUEST,
  PRODCUT_DETAIL_SUCCESS,
  PRODCUT_DETAIL_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODCUT_LIST_REQUEST });
    const url = "/api/products";
    const { data } = await axios.get(url);
    dispatch({ type: PRODCUT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODCUT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODCUT_DETAIL_REQUEST });
    const url = `/api/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: PRODCUT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODCUT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message.detail
          ? error.response.data.message.detail
          : error.message,
    });
  }
};

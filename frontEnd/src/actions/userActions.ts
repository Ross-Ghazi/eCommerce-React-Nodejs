import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DETAIL_RESET,
  REGISTER_RESET,
} from "../constants/userConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";
export const login =
  (email: string, password: string): any =>
  async (dispatch: any) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const config = { headers: { "Content-type": "application/json" } };
      const { data } = await axios.post(
        "/api/users/login/",
        { username: email, password: password },
        config
      );

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const logout = (): any => (dispatch: any) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAIL_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: REGISTER_RESET });
  localStorage.removeItem("userInfo");
};

export const register =
  (name: string, email: string, password: string): any =>
  async (dispatch: any) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = { headers: { "Content-type": "application/json" } };
      const { data } = await axios.post(
        "/api/users/register/",
        { name: name, email: email, password: password },
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserDetails =
  (id: string): any =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: USER_DETAIL_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const url = `/api/users/${id}`;
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(url, config);
      dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: USER_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUserProfile: any =
  (user: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const url = `/api/users/profile/update/`;
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(url, user, config);
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

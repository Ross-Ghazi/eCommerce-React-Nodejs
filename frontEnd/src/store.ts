import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductReducers,
  ProductDetailReducer,
} from "./reducers/ProductReducers";

import {
  OrderCreateReducer,
  OrderDetailsReducer,
  OrderPayReducer,
  MyOrderListReducer,
} from "./reducers/OrderReducers";
import {
  UserLoginReducer,
  UserRegisterReducer,
  UserDetailsReducer,
  UserUpdateProfileReducer,
} from "./reducers/UserReducers";
import { CartReducer } from "./reducers/CartReducers";

const reducer = combineReducers({
  ProductList: ProductReducers,
  ProductDetails: ProductDetailReducer,
  cart: CartReducer,
  userLogin: UserLoginReducer,
  userRegister: UserRegisterReducer,
  userDetails: UserDetailsReducer,
  userUpdateProfile: UserUpdateProfileReducer,
  orderCreate: OrderCreateReducer,
  orderDetails: OrderDetailsReducer,
  orderPay: OrderPayReducer,
  myOrderList: MyOrderListReducer,
});

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const ShippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress")!)
  : {};

const initialState = {
  cart: {
    cartItems: cartItemFromStorage,
    shippingAddress: ShippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

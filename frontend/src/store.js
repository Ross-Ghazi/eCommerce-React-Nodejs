import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductListRedcuer,
  ProductDetailRedcuer,
} from "./reducers/ProductRedcuers";

import {
  OrderCreateReducer,
  OrderDetailsReducer,
  OrderPayReducer,
  MyOrderListReducer,
} from "./reducers/OrderReducers";
import {
  UserLoginRedcuer,
  UserRegisterRedcuer,
  UserDetailsRedcuer,
  UserUpdateProfileRedcuer,
} from "./reducers/UserRedcuers";
import { CartReducer } from "./reducers/CartRedcuers";

const reducer = combineReducers({
  ProductList: ProductListRedcuer,
  ProductDetails: ProductDetailRedcuer,
  cart: CartReducer,
  userLogin: UserLoginRedcuer,
  userRegister: UserRegisterRedcuer,
  userDetails: UserDetailsRedcuer,
  userUpdateProfile: UserUpdateProfileRedcuer,
  orderCreate: OrderCreateReducer,
  orderDetails: OrderDetailsReducer,
  orderPay: OrderPayReducer,
  myOrderList: MyOrderListReducer,
});

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const ShippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initalState = {
  cart: {
    cartItems: cartItemFromStorage,
    shippingAddress: ShippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import {
  PRODCUT_LIST_REQUEST,
  PRODCUT_LIST_SUCCESS,
  PRODCUT_LIST_FAIL,
  PRODCUT_DETAIL_REQUEST,
  PRODCUT_DETAIL_SUCCESS,
  PRODCUT_DETAIL_FAIL,
} from "../constants/productConstants";
export const ProductListRedcuer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODCUT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODCUT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODCUT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductDetailRedcuer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODCUT_DETAIL_REQUEST:
      return { ...state, loading: true };
    case PRODCUT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODCUT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

import { PRODUCT_LIST,SET_PRODUCT_LIST } from "./constant";

export const productList = () => {
  return { type: PRODUCT_LIST, data: "hello" };
};

// export const setProductList = (data) => {
//     console.warn("Set product list api ", data);
//     return { type: SET_PRODUCT_LIST, data: data };
//   };

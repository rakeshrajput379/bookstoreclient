import { ADD_TO_CART, DELETE_TO_CART, EMPTY_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "./constant";

export const addToCart = (data) => {
  return { type: ADD_TO_CART, data: data };
};

export const removeToCart = (data) => {
  return { type: REMOVE_TO_CART, data: data };
};

export const updateToCart = (data) => {
  return { type: UPDATE_TO_CART, data: data };
};


export const deleteToCart = (data) => {
  return { type: DELETE_TO_CART, data: data };
};

export const emptyCart = (data) => {
  return { type: EMPTY_CART, data: data };
};
import {
  ADD_TO_CART,
  DELETE_TO_CART,
  EMPTY_CART,
  REMOVE_TO_CART,
  UPDATE_TO_CART,
} from "./constant";

export const cartData = (data = [], action) => {
  console.log("Reducer Logs :: Data ", data, "Action", action);
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condation", action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      console.warn("REMOVE_TO_CART condation", data);

     // data.length = data.length ? data.length - 1 : [];

      var remaningItem = data.filter((item) => item.id !== action.data);

      console.warn("Remaning Items ", remaningItem);

      return [...remaningItem];
    case UPDATE_TO_CART:
      return 1 + 1;
    case DELETE_TO_CART:
      return 1 + 1;
    case EMPTY_CART:
      console.warn("EMPTY_CART condation", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};

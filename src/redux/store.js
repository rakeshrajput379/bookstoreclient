// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

//console.log(rootreducer);

// const store = createStore(rootreducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;

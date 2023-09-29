import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchAyzot } from "../Middleware/Middleware";
import StoreCar from "./CarStore";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    StoreCar: StoreCar,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchAyzot);

export default store;

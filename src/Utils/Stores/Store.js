import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchLeave } from "../Middleware/Middleware";
import StoreAuth from "./AuthStore";
import StoreLeave from "./LeaveStore";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    StoreAuth: StoreAuth,
    StoreLeave: StoreLeave,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchLeave);

export default store;

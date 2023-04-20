import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import userState from "./reducers/userState";

export default configureStore({
  reducer: {
    userState: userState,
    counter: counterReducer,
  },
});

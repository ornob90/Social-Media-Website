import { configureStore } from "@reduxjs/toolkit";

import navReducer from "../redux/features/navSlice";
import postReducer from "../redux/features/postSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      nav: navReducer,
      post: postReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const createTestStore = (preloadedState) => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState,
  });

  return store;
};

export default store;

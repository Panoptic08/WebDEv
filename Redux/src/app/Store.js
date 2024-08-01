import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/Slice";

export const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

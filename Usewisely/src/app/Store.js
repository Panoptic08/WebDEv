import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "../features/todo/Slice"
const store = configureStore(
{
    reducer: timeReducer
}
)
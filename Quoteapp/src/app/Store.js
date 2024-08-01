import { configureStore, ReducerType } from "@reduxjs/toolkit";
import quoteReducer from '../features/Slice'


export const Store = configureStore(
    {
        reducer: quoteReducer
    }    
)
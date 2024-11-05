import { configureStore } from "@reduxjs/toolkit";
import colorSliceReducer from "./slices/colorSlice";
export const store = configureStore({
    reducer: {
        colorSlice: colorSliceReducer,
    },
});

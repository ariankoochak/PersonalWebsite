import { configureStore } from "@reduxjs/toolkit";
import colorSliceReducer from "./slices/colorSlice";
import languageSliceReducer from "./slices/language";
export const store = configureStore({
    reducer: {
        colorSlice: colorSliceReducer,
        languageSlice : languageSliceReducer,
    },
});

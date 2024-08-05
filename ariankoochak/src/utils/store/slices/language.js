import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang : "en"
};

export const languageSlice = createSlice({
    name: "languageSlice",
    initialState,
    reducers: {
        setEn: (state) => {
            state.lang = "en"
        },
        setFa: (state) => {
            state.lang = "fa"
        }
    },
});

// Action creators are generated for each case reducer function
export const { setEn, setFa} = languageSlice.actions;

export default languageSlice.reducer;

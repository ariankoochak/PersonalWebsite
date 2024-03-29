import { createSlice } from "@reduxjs/toolkit";

const colors = ["blue", "red", "green", "orange"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
const initialState = {
    mainColor: {
        name : randomColor,
        color: `persian-${randomColor}-color`,
        backgroundColor: `persian-${randomColor}-Backgroundcolor`,
        backgroundColorDiv: `persian-${randomColor}-div-color`,
    },
};

export const colorSlice = createSlice({
    name: "colorSlice",
    initialState,
    reducers: {
        setBlue: (state) => {
            state.mainColor = {
                color: "persian-blue-color",
                backgroundColor: "persian-blue-Backgroundcolor",
                backgroundColorDiv: "persian-blue-div-color",
            };
        },
        setGreen: (state) => {
            state.mainColor = {
                color: "persian-green-color",
                backgroundColor: "persian-green-Backgroundcolor",
                backgroundColorDiv: "persian-green-div-color",
            };
        },
        setRed: (state) => {
            state.mainColor = {
                color: "persian-red-color",
                backgroundColor: "persian-red-Backgroundcolor",
                backgroundColorDiv: "persian-red-div-color",
            };
        },
        setOrange: (state) => {
            state.mainColor = {
                color: "persian-orange-color",
                backgroundColor: "persian-orange-Backgroundcolor",
                backgroundColorDiv: "persian-orange-div-color",
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setBlue, setGreen, setRed, setOrange } = colorSlice.actions;

export default colorSlice.reducer;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setBlue,
    setGreen,
    setOrange,
    setRed,
} from "../../utils/store/slices/colorSlice";

export default function ColorChanger() {
    const colors = ["blue", "red", "green", "orange"];
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
    const [selectedColor, setSelectedColor] = useState(mainColor.name);
    const dispatch = useDispatch();
    const handleColorClick = (e) => {
        switch (e.target.id) {
            case "blue":
                setSelectedColor("blue");
                dispatch(setBlue());
                break;
            case "red":
                setSelectedColor("red");
                dispatch(setRed());
                break;
            case "green":
                setSelectedColor("green");
                dispatch(setGreen());
                break;
            case "orange":
                setSelectedColor("orange");
                dispatch(setOrange());
                break;
            default:
                console.error("error in handleColorClick function");
        }
    };
    const handleRenderColors = () => {
        return colors.map((color) => {
            return (
                <div
                    id={color}
                    key={color}
                    className={`persian-${color}-Backgroundcolor ${
                        color === selectedColor ? "selected-color" : ""
                    } color`}
                    onClick={handleColorClick}
                ></div>
            );
        });
    };
    return (
        <div
            className={`common-styles-div color-changer-div ${mainColor.backgroundColorDiv}`}
        >
            <div className="left-side">{handleRenderColors()}</div>
            <div className="right-side">
                <a href="https://mega.nz/folder/yQ11XJ6a#HKqEfDjBETz9vbxFVvbBMA" target="_blank" rel="noreferrer"> &#9729; &#65039;</a>
            </div>
            {/* <div id = 'blue' className="persian-blue-Backgroundcolor selected-color" onClick={handleColorClick}></div>
          <div id = 'red' className="persian-red-Backgroundcolor" onClick={handleColorClick}></div>
          <div id = 'green' className="persian-green-Backgroundcolor" onClick={handleColorClick}></div>
          <div id = 'orange' className="persian-orange-Backgroundcolor" onClick={handleColorClick}></div> */}
        </div>
    );
}

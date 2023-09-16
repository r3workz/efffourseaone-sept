import React from "react";
import "./Buttons.css";
const Buttons = ({ type, num1, num2, setResult, setStatus }) => {
    // Function to validate the inputs
    const validate = () => {
        // Check if any of the fields are empty
        if (!num1 || !num2) {
            setStatus("Error");
            setResult("All fields are required");
            return false;
        }
        // Check if the inputs are numbers
        if (isNaN(num1) || isNaN(num2)) {
            setStatus("Error");
            setResult("Please enter valid numbers");
            return false;
        }
        setStatus("Success");
        return true;
    };

    // Function to calculate the result
    const calculate = () => {
        switch (type) {
            case "add": {
                //without parseFloat it would be `2+2 = 22` and parseInt would round decimals
                return parseFloat(num1) + parseFloat(num2);
            }
            case "subtract": {
                return num1 - num2;
            }
            case "multiply": {
                return num1 * num2;
            }
            case "divide": {
                if (num2 === "0") {
                    setStatus("Error");
                }
                return num1 / num2;
            }
            default:
                return "";
        }
    };
    return (
        <button onClick={() => validate() && setResult(calculate())}>
            {type === "add"
                ? "\u002B"
                : type === "subtract"
                ? "\u2212"
                : type === "multiply"
                ? "\u00D7"
                : type === "divide"
                ? "\u00F7"
                : ""}
        </button>
    );
};

export default Buttons;

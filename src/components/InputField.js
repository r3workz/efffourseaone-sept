import React from "react";
import "./InputField.css";
const InputField = (props) => (
    <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
    />
);

export default InputField;

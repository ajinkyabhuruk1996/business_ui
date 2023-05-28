import React from "react";
import {useField } from "formik";
import "./TextInput.css"
import StyledErrorMessage from '../CustomStyles/StyledErrorMessage.js'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="group">
        <div className="field">
            <input className="inputAreaStyle inputAnimation" {...field} {...props} />   
            <label className="labelAnimation" htmlFor={props.id || props.name}>{label}</label>
        </div>
            {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
                ) 
                : null
            }
        </div>
    );
};

export default TextInput;
import React from "react";
import {useField } from "formik";
import "../TextInput/TextInput.css"
import StyledErrorMessage from '../CustomStyles/StyledErrorMessage.js'

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="group">
            <div className="field">
                <textarea className="inputAreaStyle inputAnimation" {...field} {...props} />   
                <label className="labelAnimation" htmlFor={props.id || props.name}>{label}</label>
                <br/>
            </div>
                {meta.touched && meta.error ? (
                        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
                    ) 
                    : null
                }
        </div>
    );
};

export default TextArea;
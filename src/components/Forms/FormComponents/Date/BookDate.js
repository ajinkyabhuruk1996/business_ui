import React from "react";
import {useField } from "formik";
import StyledErrorMessage from "../CustomStyles/StyledErrorMessage";
import StyledLabel from "../CustomStyles/StyledLabel";
import "../TextInput/TextInput.css"

const BookDate = ({ children,label, ...props }) => {
    const [field, meta] = useField({ ...props, type: "date" });
    return (
        <div>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <br/>
            <label className="date">
                <input className="inputAreaStyle inputAnimation" {...field} {...props} type = "date"/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
                ) 
                : null
            }
        </div>
    );
};

export default BookDate;
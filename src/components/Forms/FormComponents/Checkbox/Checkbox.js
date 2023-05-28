import React from "react";
import {useField } from "formik";
import StyledErrorMessage from "../CustomStyles/StyledErrorMessage";

const CheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <div>
            <label className="checkbox">
                <input {...field} {...props} type = "checkbox" />
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

export default CheckBox;
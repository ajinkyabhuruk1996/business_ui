import React from "react"
import {useField } from "formik"
import StyledSelect from '../CustomStyles/StyledSelect.js'
import StyledLabel from '../CustomStyles/StyledLabel.js'
import StyledErrorMessage from '../CustomStyles/StyledErrorMessage'
import "../TextInput/TextInput.css"

const SelectOptions = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
        <br/>
        <StyledSelect className="inputAreaStyle inputAnimation" {...field} {...props} />
        {meta.touched && meta.error ? (
            <StyledErrorMessage>{meta.error}</StyledErrorMessage>
          )
          : null
        }
      </>
    );
};

export default SelectOptions;
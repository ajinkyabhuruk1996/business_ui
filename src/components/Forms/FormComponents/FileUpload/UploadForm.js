import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
// import axios from 'axios';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Resizer from "react-image-file-resizer";
import ImageResize from "./ImageResize";
// import '../../../Forms/Forms.css';
// import TextInput from '../../../Forms/FormComponents/TextInput/TextInput.js';
// import CheckBox from '../../../Forms/FormComponents/Checkbox/Checkbox.js';
// import { API_ROOT } from '../../../AppConfig/app-config.js';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import LoginForm from "../../../Forms/Login/Login.js";
// import { isAuthorizedToPerform } from '../../../../utils.js';

// import React from 'react';
import { render } from 'react-dom';
// import { Formik } from "formik";
// import yup from "yup";

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.state = {
      newImage: "",
      resizedImage: undefined,
      originalImageBase64String: undefined
    };
  }

  fileChangedHandler(event) {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        // https://www.npmjs.com/package/react-image-file-resizer
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri, a, b) => {
            console.log(uri);
            this.setState({ newImage: uri });
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{ file: null }}
          onSubmit={(values) => {
            alert(
              JSON.stringify(
                {
                  fileName: values.file.name,
                  type: values.file.type,
                  size: `${values.file.size} bytes`,
                  compressed: `${this.state.newImage} bytes`
                },
                null,
                2
              )
            );
          }}
          validationSchema={yup.object().shape({
            file: yup.mixed().required(),
          })}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  {/* <label for="file">File upload</label> */}
                  <input id="file" name="file" type="file" onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                    // this.fileChangedHandler(event);
                  }} className="form-control" />
                  <Thumb file={values.file} />

                  Compressed
                  <img src={this.state.newImage}
                    alt=""
                    className="img-thumbnail mt-2"
                    height={200}
                    width={200}
                  />
                  Resize
                  <ImageResize
                    imageToResize={values.file}
                    onImageResized={(resizImg) => this.setState({ resizedImage: resizImg })}
                    onOrigImgBase64StringResized={(orignImgString) => this.setState({ originalImageBase64String: orignImgString })}
                  />
                </div>
                {
                  this.state.resizedImage &&
                  <div>
                    <h2>Resized Image</h2>
                    <img
                      alt="Resize Image"
                      src={this.state.resizedImage}
                      height={200}
                      width={200}
                    />
                  </div>
                }
                <button type="submit" className="btn btn-primary">submit</button>
              </form>
            );
          }} />
      </div>
    );
  }
};

export default UploadForm;
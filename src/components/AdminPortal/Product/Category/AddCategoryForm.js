import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import '../../../Forms/Forms.css';
import TextInput from '../../../Forms/FormComponents/TextInput/TextInput.js';
import CheckBox from '../../../Forms/FormComponents/Checkbox/Checkbox.js';
import { API_ROOT } from '../../../AppConfig/app-config.js';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LoginForm from "../../../Forms/Login/Login.js";
import { isAuthorizedToPerform } from '../../../../utils.js';
export default class AddCategoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      addCatSuccessFlag: false,
      message: null
    }
  }

  render() {
    
    const canAddCategory = isAuthorizedToPerform( "product", "canAddCategory");

    if (this.state.message != null && this.state.addCatSuccessFlag === true) {
      return (
        <div className=" container formStyle">
          <br />
          <Alert severity="success">
            <AlertTitle><strong>Category has been created!</strong></AlertTitle>
            <label>{this.state.message}</label>
          </Alert>
          {/* <LoginForm/> */}
          <p>Todo: Display list of categories created by data admin here:</p>
        </div>
      );
    } else if (this.state.message != null && this.state.addCatSuccessFlag === false) {
      return (
        <div className="container formStyle">
          <Alert severity="error">
            <AlertTitle><strong>Error!</strong></AlertTitle>
            <label>{this.state.message}</label>
          </Alert>
        </div>
      )
    } else {
      return (
        <div>
          <Formik
            initialValues={{
              categoryKey: "",
              categoryName: "",
              noOfProducts: "",
              picture: "",
              description: "",
              organizationName: 'testOrg',
            }}
            validationSchema={Yup.object({
              categoryName: Yup.string()
                .required("Required"),
              categoryKey: Yup.string()
                .required("Required"),
              noOfProducts: Yup.string()
                .required("Required"),
              picture: Yup.string()
                .required("Required"),
            })}
            onSubmit={
              async (values, { setSubmitting }) => {
                await new Promise(r => setTimeout(r, 500));
                // console.log(values);
                //alert("Thank you for signing up, " + values.categoryName);
                fetch(`${API_ROOT}/addcategory`, {
                  credentials: 'include',
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  withCredentials: true,
                  body: JSON.stringify(values, null, 2)
                })
                  .then(response => response.json()
                    .then(data => ({ status: response.status, returnedBody: data })))
                  .then(returnedObj => {
                    var strMsg = returnedObj.returnedBody.msg;
                    if (returnedObj.status === 200) {
                      this.setState({ message: strMsg, addCatSuccessFlag: true })
                    } else {
                      this.setState({ message: strMsg, addCatSuccessFlag: false })
                    }
                  })
                setSubmitting(false);
              }}
          >
            <div className="formContainer">
              <p>Add category here... <em>ElectroShop</em></p>
              <hr />
              <div className="formStyle">
                <Form>
                  <TextInput
                    name="categoryKey"
                    type="text"
                    placeholder="Category Key"
                  />
                  <TextInput
                    name="categoryName"
                    type="text"
                    placeholder="Category Name"
                  />
                  <TextInput
                    name="picture"
                    type="photo"
                    placeholder="Photo Of Category"
                  />
                  <TextInput
                    name="password"
                    type="password"
                    placeholder="Password"
                  />

                  <button className="buttonStyle" type="submit">Submit</button>
                </Form>
              </div>
              <hr />
              <p>Todo: Display list of users created by super admin:</p>
            </div>
          </Formik>
        </div>
      );
    }
  }
}
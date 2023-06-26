import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import '../Forms.css';
import TextInput from '../FormComponents/TextInput/TextInput.js';
import CheckBox from '../FormComponents/Checkbox/Checkbox.js';
import { API_ROOT } from '../../AppConfig/app-config.js';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LoginForm from "../Login/Login";
import { isAuthorizedToPerform } from '../../../utils.js';
export default class CreateSubUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      signUpSuccessFlag: false,
      message: null
    }
  }


  render() {
    
    const canAddWebSiteAdmin = isAuthorizedToPerform( "user", "canAddWebSiteAdmin");
    const canAddDataAdmin = isAuthorizedToPerform( "user", "canAddDataAdmin");

    if (this.state.message != null && this.state.signUpSuccessFlag === true) {
      return (
        <div className=" container formStyle">
          <br />
          <Alert severity="success">
            <AlertTitle><strong>User account has been created!</strong></AlertTitle>
            <label>{this.state.message}</label>
          </Alert>
          {/* <LoginForm/> */}
          <p>Todo: Display list of users created by super admin here also:</p>
        </div>
      );
    } else if (this.state.message != null && this.state.signUpSuccessFlag === false) {
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
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              // isWebSiteAdmin: false,
              // isDataAdmin: false,
              roles: [],
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .required("Required"),
              lastName: Yup.string()
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(15, "Password is too long!")
                .matches(/[a-z]/, "Password must contain at least one letter")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[0-9]/, "Password must contain at least one digit")
                .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
                .required("Required"),
            })}
            onSubmit={
              async (values, { setSubmitting }) => {
                await new Promise(r => setTimeout(r, 500));
                // console.log(values);
                //alert("Thank you for signing up, " + values.firstName);
                fetch(`${API_ROOT}/signup`, {
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
                      this.setState({ message: strMsg, signUpSuccessFlag: true })
                    } else {
                      this.setState({ message: strMsg, signUpSuccessFlag: false })
                    }
                  })
                setSubmitting(false);
              }}
          >
            <div className="formContainer">
              <p>Create super users here <em>ElectroShop</em></p>
              <hr />
              <div className="formStyle">
                <Form>
                  <TextInput
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                  <TextInput
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                  <TextInput
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <TextInput
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  {/* "canAddWebSiteAdmin": true,
                "canAddDataAdmin": true */}


                  <div role="group" aria-labelledby="checkbox-group">
                    <label>
                      <Field type="checkbox" name="roles" value="isWebSiteAdmin" disabled={!canAddWebSiteAdmin} />
                      &nbsp; Web site admin
                    </label>
                    <label>
                      <Field type="checkbox" name="roles" value="isDataAdmin" disabled={!canAddWebSiteAdmin} />
                      &nbsp; Data admin
                    </label>
                  </div>

                  {/* <CheckBox name="isWebSiteAdmin" disabled={!canAddWebSiteAdmin}>
                    &nbsp; create web site admin
                  </CheckBox>
                  <CheckBox name="isDataAdmin" disabled={!canAddWebSiteAdmin}>
                    &nbsp; create data admin
                  </CheckBox> */}
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
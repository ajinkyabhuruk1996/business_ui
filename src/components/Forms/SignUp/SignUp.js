import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import '../Forms.css'
import TextInput from '../FormComponents/TextInput/TextInput.js'
import {API_ROOT} from '../../AppConfig/app-config.js'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LoginForm from "../Login/Login";

export default class signUpForm extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
      data: null,
      signUp: false,
      message: null
    }
  }

  render(){
    if(this.state.message != null && this.state.signUp === true){
      return(
        <div className=" container formStyle">
          <br/>
          <Alert severity="success">
              <AlertTitle><strong>Your account has been created!</strong></AlertTitle>
              <label>{this.state.message}</label>
          </Alert>
          <LoginForm/>
        </div>
      );
    } else if(this.state.message != null && this.state.signUp === false) {
      return (
        <div className="container formStyle">
            <Alert severity="error">
              <AlertTitle><strong>Error!</strong></AlertTitle>
              <label>{this.state.message}</label>
            </Alert>
        </div>
      )
    } else {
      return(
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              roles: [],
              organizationName: 'testOrg'
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
              async(values,{setSubmitting})=>{
              await new Promise(r=>setTimeout(r,500));
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
                .then(data => ({status: response.status, returnedBody: data})))
              .then(returnedObj => {
                var strMsg = returnedObj.returnedBody.msg;
                if(returnedObj.status === 200){
                  this.setState({message: strMsg, signUp: true})
                } else {
                  this.setState({message:strMsg, signUp: false})
                }
              })
              setSubmitting(false);
            }}
          >
          <div className="formContainer">
            <p>Sign Up for <em>ElectroShop</em></p>
            <hr/>
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
                <button className="buttonStyle" type="submit">Submit</button>
              </Form>
            </div>
            <hr/>
            <p> Already have an account? <a href="/login"> Login</a></p>
          </div>
          </Formik>
        </div>
      );
    }
  }
}
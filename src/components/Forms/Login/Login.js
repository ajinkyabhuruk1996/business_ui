import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import '../Forms.css'
import TextInput from '../FormComponents/TextInput/TextInput.js'
import {API_ROOT} from '../../AppConfig/app-config.js'
import { Navigate } from "react-router-dom"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: null,
            loggedIn: false,
            message : null,
            isCustomer: false
        }
    }

    renderMessage(){
        if(this.state.message != null && this.state.loggedIn === false){
            return (
                <div className="container formStyle">
                    <Alert severity="error">
                        <AlertTitle><strong>Error</strong></AlertTitle>
                        {this.state.message}
                    </Alert>
                </div>
            )
        }
    }

    render(){
        if(this.state.message != null && this.state.loggedIn === true && this.state.isCustomer === true){
            return(
                <div>
                    <Navigate to="/booking" />
                </div>
            );
        } if(this.state.message != null && this.state.loggedIn === true && !this.state.isCustomer){
            return(
                <div>
                    <Navigate to="/adminportal" />
                </div>
            );
        } 
        else {
            return(
                <div>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                            password: Yup.string()
                            .required("Required"),
                        })}
                        onSubmit={
                            async (values, { setSubmitting }) => {
                            await new Promise(r => setTimeout(r, 500));
                            // console.log(values);
                            // alert("You are logged in, " + values.email);
                            this.setState({message: null});
                            fetch(`${API_ROOT}/login`, {
                                credentials: 'include',
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                withCredentials: true,
                                body: JSON.stringify(values, null, 2)
                            })
                            .then(response => response.json()
                                .then(data => ({status: response.status, returnedBody: data})))                 
                            .then(returnedObj => {
                                var strMsg = returnedObj?.returnedBody?.msg;
                                var userCapabilites = returnedObj?.returnedBody?.userCapabilites;
                                var roles = returnedObj?.returnedBody?.roles;
                                const isCustomer= roles && roles.indexOf('isCustomer') === -1 ?  false : true;
                                if (returnedObj.status === 401){ // failure
                                    this.setState({message:returnedObj.returnedBody.msg, loggedIn: false});
                                } else if (returnedObj.status === 200){ //success
                                    this.setState({message:strMsg, loggedIn: true, isCustomer: isCustomer});
                                } else { // failure
                                    this.setState({message:strMsg, loggedIn: false})
                                }
                                
                                sessionStorage.setItem("userCapabilites", JSON.stringify(userCapabilites));
                                sessionStorage.setItem("userloggedIn", true);
                                sessionStorage.setItem("roles", JSON.stringify(roles));
                            }).catch(err => {
                                this.setState({message:`Error Code:ERR01 User login:  ${err.message}`, loggedIn: false})
                            });
                            setSubmitting(false);         
                        }} 
                    >
                        <div className="formContainer">
                            <p> Sign in to <em> ElectroShop </em></p>
                            {this.renderMessage()}
                            <hr/>
                            <div className="formStyle">
                                <Form method="POST">
                                    <TextInput
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                    <TextInput 
                                        name="password"
                                        type="password"
                                        placeholder= "Password"
                                    />
                                    <button 
                                        className="buttonStyle" 
                                        type="submit"
                                    > 
                                        Submit
                                    </button>
                                </Form>
                            </div>
                            <hr/>
                            <p> New to ElectroShop? <a href="/signup"> Sign up </a></p>
                        </div>
                    </Formik>
                </div>
            );
        }
    }
}


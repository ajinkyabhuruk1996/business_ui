import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import '../Forms.css'
import TextArea from '../FormComponents/TextArea/TextArea.js'
import SelectOptions from '../FormComponents/SelectOptions/SelectOptions.js'
import CheckBox from '../FormComponents/Checkbox/Checkbox.js'
import BookDate from "../FormComponents/Date/BookDate"
import SelectNumber from '../FormComponents/Number/SelectNumber.js'
import {API_ROOT} from '../../AppConfig/app-config.js'
import TextInput from "../FormComponents/TextInput/TextInput"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Logout from '../Logout/Logout.js';
import LoginForm from "../Login/Login"

export default class BookingForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: null,
            booking: false,
            message : null
        }
    }

    renderMessage(){
        if(this.state.message != null && this.state.booking === false){
            return (
                <div className="container formStyle">
                    <AlertTitle><strong>You</strong></AlertTitle>
                    <Alert severity="error">{this.state.message}</Alert>
                </div>
            )
        }
    }
    
    render(){
        if(this.state.booking === true){
            return(
                <div className="container formStyle" style={{"marginTop": "5rem"}}>
                    <Alert severity="success">
                        <AlertTitle><strong>Your booking request has been submitted!</strong></AlertTitle>
                        <label>{this.state.message}</label>
                    </Alert>
                    <Logout/>
                </div>
            );
        } else if(this.state.message != null && this.state.booking === false){
            return (
                <div className="container formStyle">
                    <Alert severity="error">
                        <AlertTitle><strong>Error</strong></AlertTitle>
                        <label>{this.state.message}</label>
                    </Alert>
                    <br/>
                    <LoginForm/>
                </div>
            )
        } else {
            return(
                <div>
                    <Formik
                        initialValues={{
                            adults: "",
                            children: "",
                            date: "",
                            food: "",
                            request: "",
                            acceptedTerms: "",
                        }}
                        validationSchema={Yup.object({
                            adults: Yup.number()
                            .required("Required")
                            .positive(true)
                            .min(2,"Bookings are accepted for a minimum of 2 people")
                            .max(20, "Bookings are accepted for a maximum of 20 people")
                            .integer(),
                            children: Yup.number()
                            .required("Required"),
                            date: Yup.date()
                            .required("Required"),
                            vegfood: Yup.string()
                            .oneOf(
                            ["Select","0","1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12", "13", "14", "15"],
                            "Invalid Input"
                            )
                            .optional(),
                            nonvegfood: Yup.string()
                            .oneOf(
                            ["Select","0","1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12", "13", "14", "15"],
                            "Invalid Input"
                            )
                            .optional(),
                            request: Yup.string()
                            .required("Required"),
                            phoneNumber: Yup.string()
                            .required("Required"),
                            acceptedTerms: Yup.boolean()
                            .required("Required")
                            .oneOf([true], "You must accept the terms and conditions."),
                        })}
                        onSubmit={
                            async (values, { setSubmitting }) => {
                            await new Promise(r => setTimeout(r, 500));
                            // console.log(values);
                            this.setState({message: null});
                            fetch(`${API_ROOT}/booking`, {
                                credentials: 'include',
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                withCredentials: true,
                                body: JSON.stringify(values, null, 2)
                            })
                            .then(response => response.json()
                                .then(data => ({status:response.status, returnedBody: data})))
                            .then(returnedObj => {
                                var strMsg = returnedObj.returnedBody.msg;
                                if (returnedObj.status === 200){
                                    this.setState({message:strMsg, booking: true})
                                } else {
                                    this.setState({message:strMsg, booking: false})
                                }
                            })
                            setSubmitting(false);         
                        }} 
                    >
                    
                        <div className="formContainer">
                            <div className="formStyle" style={{"marginTop": "2rem"}}>
                                logout
                            <Logout/>
                                <Form method="POST">
                                    <SelectNumber 
                                        label="Adults:"
                                        name="adults"
                                    >
                                    </SelectNumber>
                                    <SelectNumber 
                                        label="Children:"
                                        name="children"
                                    >
                                    </SelectNumber>
                                    <BookDate 
                                        label="Choose a date:" 
                                        name="date"    
                                        placeholder='yyyy-mm-dd'
                                        pattern ="\d{4}-\d{2}-\d{2}"
                                    >
                                    </BookDate>
                                    <SelectOptions style={{"color":"black"}} label="Vegetarian Thali:" name="vegfood">
                                        <option value="">Select</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                    </SelectOptions>
                                    <br/>
                                    <SelectOptions style={{"color":"black"}} label="Non-Vegetarian Thali:" name="nonvegfood">
                                        <option value="">Select</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                    </SelectOptions>
                                    <TextArea
                                        label="Request:"
                                        name="request"
                                        type="text"
                                    />
                                    <TextInput 
                                        name="phoneNumber"
                                        placeholder= "Phone Number"
                                        pattern="[0-9]{10}"
                                        type="tel"
                                    />
                                    <CheckBox name="acceptedTerms">
                                        &nbsp; I have read all the <a href="/policies">terms and conditions</a>
                                    </CheckBox>
                                    <button 
                                        className="buttonStyle" 
                                        type="submit"
                                    > 
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Formik>
                    
                </div>
            );
        }
    }
}


import React from "react"
import { Navigate } from "react-router-dom";
import { API_ROOT } from "../../AppConfig/app-config";

export default class Logout extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: null,
            loggedOut: false,
            message : null
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        fetch(`${API_ROOT}/logout`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            body: JSON.stringify(object)
        })
        .then(d => console.log("Logged Out"),
            this.setState((state)=> {
                return {loggedOut: true}
            })
        );
    }

    render(){
        if(this.state.loggedOut === true){
            return(
                <div className=" container">
                    <p>{this.state.message}</p>
                    <Navigate to="/" />
                </div>
            );
        } else{
            return( 
                <div>
                    <form method="/post" onSubmit={this.handleLogout}>
                        <button type="submit">Logout</button>
                    </form>
                </div>
            )
        } 
    }
}


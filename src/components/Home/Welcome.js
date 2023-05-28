import React from 'react'
import { Alert } from 'react-bootstrap';
import {API_ROOT} from '../AppConfig/app-config'

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={apiResponse: ""}
    }

    callAPI(){
        fetch(`${API_ROOT}/welcome`)
        .then(res => res.text())
        .then(res => this.setState({apiResponse:res}));
    }

    componentDidMount(){
        this.callAPI();
    }

    render(){
        return (
            <div>

                <Alert variant="secondary">
                <p class="mb-0">Contact Number:  <a href="tel:+(91)8329317749">{this.state.apiResponse}</a></p>
               
                </Alert>
                
            </div>
        )
    }
}

export default Welcome;
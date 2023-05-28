import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Location.css'
// import location from './images/location.png'

export default class Weather extends Component{
    render(){
        return(
            <div>
                <Card className="locationCard">
                    <Card.Header style={{"fontSize": "1.2rem"}}>Office Address</Card.Header>
                    <Card.Body>
                        <Card.Title >
                            <iframe 
                            className="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12951.036005704653!2d73.80366792951249!3d18.448402226036485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29516d4e2a68f%3A0x33648ce6b10f9a87!2sDhayari%20Phata%2C%20Pune%2C%20Maharashtra%20411041!5e1!3m2!1sen!2sin!4v1685290198955!5m2!1sen!2sin"
                            frameBorder="true"
                            >
                            </iframe>
                        </Card.Title>
                        <Card.Text>
                            The Kings, Dhayri Phata, Pune<br/>
                                <br/>
                                For bookings:<a href="tel:+(91)8329317749"> +(91)832-931-7749</a>
                                <br/>
                                Office:<a href="tel:+(91)7822949347"> +(91)782-294-9347</a>                                                    
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
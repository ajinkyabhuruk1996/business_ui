import React, { Component } from 'react'
import './AboutUs.css'
import Location from '../Location/Location.js'

export default class AboutUs extends Component{
    render(){
        return(
            <div className="aboutusContainer container ">
                <h4>About Us</h4>
                <p>Build a world class portfolio of renewable energy assets and be in the top globally </p> 
                <p>Build a culture of excellence by efficient and safe execution of all our projects </p> 
                <p>Maintain the highest standards of quality and sustainability and act responsibly at all times </p> 
                <p>Foster a culture of trust, collaboration and performance to achieve our business goals and be an employer of choice</p> 
                <p>Be a responsible corporate citizen and uphold the highest standards of corporate governance, ethics and integrity</p>           
                <Location/>
            </div>
        );
    }
}
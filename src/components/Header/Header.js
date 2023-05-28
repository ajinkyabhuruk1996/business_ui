import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'

import logo from './images/brand.png'
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <div className="headerContainer">
                <Navbar className= "navBarStyle navbar" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="/" className="brandName" >
                        <img
                            alt="logo"
                            src={logo}
                            width="60"
                            height="60"
                        />
                        {' '}
                        ElectroShop
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end navOptions">
                        <Nav>
                            <Nav.Link className="link" active="true" href="/aboutus">About us</Nav.Link> 
                            {/* <Nav.Link className="link" active="true" href="/planning">Plan your trip</Nav.Link> 
                            <Nav.Link className="link" active="true" href="/policies">Policies</Nav.Link> */}
                            <Nav.Link className="link" active="true" href="/signup">Sign Up</Nav.Link> 
                            <Nav.Link className="link" active="true" href="/login">Login</Nav.Link>
                            {/* <Nav.Link className="link" active="true" href="/booking">Booking</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


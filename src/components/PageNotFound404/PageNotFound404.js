
import React, { Component } from 'react'
import './PageNotFound404.css'
import pagenotfound from './images/pagenotfound.png'

export default class PageNotFound404 extends Component{
    render(){
        return(
            <div className="error404Container">
                <div className="error404">
                    <h2>４𝟢４!</h2>
                    <h5>
                        Uh-Oh! Looks like you are lost in the wilderness 
                        <span role="img" aria-label="tree">🌲</span>
                        <span role="img" aria-label="cacti">🌵</span>
                        <span role="img" aria-label="tree">🌳</span>
                        <span role="img" aria-label="mountain">🏔</span>
                    </h5>
                    <h5> The page you’re looking for cannot be found!</h5>
                    <p><a href="/">Return to home page ⏎</a></p>
                    <img className="error404img" src={pagenotfound} alt="error-404"/>
                </div>
            </div>
        );
    }
}
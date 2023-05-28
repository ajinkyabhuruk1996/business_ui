import React from 'react'
import './PlanAhead.css'

const PlanAhead = () => {
    return (
        <div className="planAheadContainer">
            <h5>Why is trip planning important?</h5>
            <p>Adequate trip planning and preparation helps travelers accomplish trip goals safely and enjoyably. 
            Poor planning often results in miserable campers and damage to natural and cultural resources. Plan ahead to prevent putting yourselves and others at risk.</p>
            <h5>Factors to consider: </h5>
            <li>
                Policies: Please read our <a href="/policies">policies</a> before your arrival.
            </li>
            <li>
                Weather: Always check the <a href="/">weather</a> before your arrival, it tells you what to expect and will help you plan your activities accordingly.
            </li>
        </div>
    )
}

export default PlanAhead
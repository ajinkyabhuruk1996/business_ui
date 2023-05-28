import React from 'react'
import './QuoteList.css'
import { Card } from 'react-bootstrap'

const QuoteList = () => {
    return (
        <div>
        <div className="quoteContainer">
            {/* className="quoteContainer" */}
            <Card className="subQuote">
                <Card.Body>
                    <Card.Title className="cardTitle">
                        <h5 className="guestCount">
                            Why do you need solar?
                        </h5>
                        <h3 className="price">Save Cost on Energy
                            {/* <span className="period"> save 8rs per unit</span>                             */}
                        </h3>
                        <h3 className="price">Free Energy
                            {/* <span className="period"> save 8rs per unit</span>                             */}
                        </h3>
                        <h3 className="price">Low mentenace
                            {/* <span className="period"> /night/head</span>
                            <br/>
                            <span className="period">(Discount: For group of 10+)</span>                                                            */}
                        </h3>
                        <hr/>
                        <p className="duration">
                            Contact Shubham for more information
                            <br/>
                            832-931-7749
                        </p>
                    </Card.Title>
                    <hr/>
                    <ul>
                        <li>
                            Tent or Cabin
                        </li>
                        <li>
                            Blankets 
                        </li>
                        <li>
                            Bonfire
                        </li>
                        <li>
                            Ample lights for the night
                        </li>
                    </ul>                    
                </Card.Body>
            </Card>
            <Card className="subQuote">
                <Card.Body>
                    <Card.Title className="cardTitle">
                        <h5 className="guestCount">
                            Why We? 
                        </h5>
                        <h3 className="price">Rs.4991 
                            <span className="period"> /night/head</span>
                        </h3>
                    </Card.Title>
                    <hr/>
                    <ul>
                        <li>
                            Paneer BBQ / Chicken BBQ
                        </li>
                        <hr/>
                        <li>
                            Vegetarian / Non-Vegetarian 
                        </li>
                        <hr/>
                        <li>
                            Breakfast with Tea
                        </li>                      
                    </ul>
                </Card.Body>
            </Card>
            <Card className="subQuote">
                <Card.Body>
                    <Card.Title className="cardTitle">
                        <h5 className="guestCount">
                            Amenities
                        </h5>
                        <h3 className="price">
                            <span className="period"> At no cost</span>
                            
                        </h3>
                    </Card.Title>
                    <hr/>
                    <ul>
                        <li>
                            Toilets
                        </li>
                        <li>
                            Bath (Cold water only)
                        </li>
                        <hr/>
                        <li>
                            4 Person Swing
                        </li>
                        <hr/>
                        <li>
                            1 phone charging point with cabin stay. <br/>
                            For tent camping - <br/>
                            please bring your power banks.
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
        <form action="https://tornacampsites.com/signup">
            <input 
                className="quoteButton"
                type="submit" 
                value="Register and Enquiry" />
        </form>
        </div>
    )
}

export default QuoteList
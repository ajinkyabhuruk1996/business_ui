import React from 'react'
import './QuoteList.css'
import { Card } from 'react-bootstrap'
import { isLocalhost } from '../../utils';

const ProductQuoteList = () => {

    const actionLink = isLocalhost ? 'http://localhost:3000/signup' : 'https://tornacampsites.com/signup';
    
    return (
        <div>
        <div className="quoteContainer">
            {/* className="quoteContainer" */}
            <Card className="subQuote">
                <Card.Body>
                    <Card.Title className="cardTitle">
                        <h5 className="guestCount">
                            Why solar?
                        </h5>
                        <h3 className="price">Save Cost
                            <span className="period"> on electricity bill</span>                            
                        </h3>
                        <h3 className="price">Free Energy
                        </h3>
                        <h3 className="price">Green Energy
                        </h3>
                        <h3 className="price">Low mentenace
                        </h3>
                        <hr/>
                        <p className="duration">
                            BRAND NEW & 100% GENUINE
                            <br/>
                        </p>
                    </Card.Title>
                    <hr/>
                    {/* <ul>
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
                    </ul>                     */}
                </Card.Body>
            </Card>
            <Card className="subQuote">
                <Card.Body>
                    <Card.Title className="cardTitle">
                        <h5 className="guestCount">
                            Why We? 
                        </h5>
                        <h3 className="price">Quality 
                            <span className="period"> all products</span>
                        </h3>
                    </Card.Title>
                    <hr/>
                    <ul>
                        <li>
                            We have best suppliers
                        </li>
                        <hr/>
                        <li>
                            We deliver on/before time
                        </li>
                        <li>
                            One stop solution to all requirements
                        </li>
                        <hr/>                  
                    </ul>
                </Card.Body>
            </Card>
            <Card className="subQuote">
                <Card.Body>
                    <Card.Title className="cardTitle">
                        <h5 className="guestCount">
                            How & When?
                        </h5>
                        {/* <h3 className="price">
                            <span className="period"> At no cost</span>
                        </h3> */}
                    </Card.Title>
                    <hr/>
                    <ul>
                        <li>
                            We get your requirment
                        </li>
                        <li>
                            Site visit by experts to understand more... 
                        </li>
                        <hr/>
                        <li>
                            Our experts suggest best solution and you choose...
                        </li>
                        <hr/>
                        <li>
                            Our team gives best & affordable quote.
                        </li>
                        <li>
                            You pay book the product and we deliver it hastlefree.
                        </li>
                        <hr/>
                        <li>
                            + We also offer Annual Mentenace Contract for 1 year
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
        <form action={actionLink}>
            <input 
                className="quoteButton"
                type="submit" 
                value="Register and Enquiry" />
        </form>
        </div>
    )
}

export default ProductQuoteList
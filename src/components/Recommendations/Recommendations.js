import React from 'react'
import Card from 'react-bootstrap/Card'
import torna from './images/torna.png'
import madhe from './images/madhe.png'
import pabe from './images/pabe.png'
import './Recommendations.css'

const Recommendations = () => {
    return (
        <div className="recommendationContainer">
            <Card className="cardStyle" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={torna} />
                <Card.Body>
                    <Card.Title>Torna Fort</Card.Title>
                    <Card.Text>
                        Just 60 mins of hike away from our campsite, the historic fort of Torna (also known as Prachandgad) was the first fort conquered by King Shivaji Maharaj.
                        Because of its enormous height of 4,603 ft it is usually covered in the clouds and provides breathtaking views of the Sahyadri Mountain ranges.
                    </Card.Text>
                    <Card.Link rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/yUDDj6vsLEmN6mxC8">Explore</Card.Link>
                </Card.Body>
            </Card> 
            <Card className="cardStyle" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={madhe} />
                <Card.Body>
                    <Card.Title>Madhe Ghat</Card.Title>
                    <Card.Text>
                        Located only 20 kms away from our campsite, Madhe-Ghat is a historical route because the corpse of the great warrior Tanaji Malusare was carried through these cliffs to his native place in Konkan. 
                        The scenic waterfall sits 850 meters above sea level and offers breathtaking. We highly recommend visiting this place to witness its mesmerizing beauty. 
                    </Card.Text>
                    <Card.Link rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/mdXhkFkn72t2NCfM6">Explore</Card.Link>
                </Card.Body>
            </Card>
            <Card className="cardStyle" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={pabe} />
                <Card.Body>
                    <Card.Title>Pabe Ghat</Card.Title>
                    <Card.Text>
                        If coming from Pune, we recommend you take this shortcut via Khadakwasla Dam to reach ElectroShop. 
                        With breathtaking views of nature, one can catch a glimpse of Sinhagad and Rajgad. 
                        The drive is scenic and mountainous but only to be dared by experienced drivers due to steep slopes and sharp turns.           
                    </Card.Text>
                <Card.Link rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/PBCXPWdcVbhQriL27">Explore</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recommendations

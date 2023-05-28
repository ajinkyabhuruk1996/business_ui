import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import tent from './images/tent.png'
import torna from './images/torna.png'
import barbecue from './images/barbecue.png'
import nature from './images/nature3.png'
import fire from './images/fire2.png'
import lake from './images/torna_lake2.png'
import campsite_full from './images/campsite_full.png'
import tents from './images/camp_tent.jpeg'
import camera from './images/Camera.jpg'
import ashirvaadSolar from './images/ashirvaadSolar.jpg'
import './ImageCarousel.css'

const ImageCarousel = () => {
    return (
        <div style={{"marginTop":"1%"}}>
            <Carousel className="full-width-carousel">  
            {/* carousel-indicators */}
                {/* <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={torna}
                        alt="torna"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={campsite_full}
                        alt="campsite_full"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={ashirvaadSolar}
                        alt="ashirvaadSolar"
                    />
                </Carousel.Item>  */}
                {/* <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={ashirvaadSolar}
                        alt="ashirvaadSolar"
                    />
                </Carousel.Item> */}
                <Carousel.Item interval={2500}>
                    <img
                        className="w-100 d-block"
                        src={camera}
                        alt="camera"
                    />
                </Carousel.Item>
                {/* <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={fort}
                        alt="fort"
                    />
                </Carousel.Item>  */}
                {/* <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={tent}
                        alt="tent"
                    />
                </Carousel.Item>  
                <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={barbecue}
                        alt="barbecue"
                    />
                </Carousel.Item>  */}
                {/* <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={nature}
                        alt="nature"
                    />
                </Carousel.Item> */}
                {/* <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={fire}
                        alt="fire"
                    />
                </Carousel.Item> 
                <Carousel.Item interval={2500}>
                    <img
                        className="w-100"
                        src={lake}
                        alt="lake"
                    />
                </Carousel.Item>     */}
            </Carousel>            
        </div>
    )
}

export default ImageCarousel
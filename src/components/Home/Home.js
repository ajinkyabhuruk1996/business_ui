import React, { Component } from 'react'

// import torna from './images/torna.jpg'
import Weather from '../Weather/Weather.js'
import Location from '../Location/Location.js'
import './Home.css'
import ProductQuoteList from '../../components2/ProductsQuote/ProductQuoteList.js'
import ImageCarousel from '../ImageCarousel/ImageCarousel.js'
import ProductCategories from '../../components2/ProductCategories/ProductCategories.js'
import Welcome from './Welcome.js'

export default class Home extends Component{
    render(){
        return(
            <div className="container">
                <Welcome/>
                <div className="imageAndWeatherCardContainer">
                    <div className="prodCategoriesImgContainer">
                        <ProductCategories/>
                    </div> 
                     {/* <Weather/>  */}
                </div>
                <ProductQuoteList/>
                <Location/>
            </div>
        );
    }
}
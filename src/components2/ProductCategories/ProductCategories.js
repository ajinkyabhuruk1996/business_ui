import React from 'react';
// import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import Carousel from 'react-bootstrap/Carousel'
// import camera from './images/Camera.jpg'
import './ProductCategories.css'
import generator5kv from '../../images/generator5kv.jpg'
import ashirvaadSolar from '../../images/ashirvaadSolar.jpg'
import cpPlusCamera from '../../images/cpPlusCamera.png'
import Battery_Luminous_RC25000_200AH from '../../images/Battery_Luminous_RC25000_200AH.png'
import solarPanelsWhiteBcg from '../../images/solarPanelsWhiteBcg.png'

const itemData = [
    {
        img: ashirvaadSolar,
        title: 'Solar Water Heaters',
        fullfilledBy: '@ashirvad solar',
    },
    {
        img: solarPanelsWhiteBcg,
        title: 'Solar Panels',
        fullfilledBy: '@ashirvad solar',
    },
    {
      img: generator5kv,
      title: 'Generator',
      fullfilledBy: '@kohler & kirloskar',
    },
    {
      img: cpPlusCamera,
      title: 'Security Solutions',
      fullfilledBy: '@Sarvadnya Infosulutions',
    },
    {
      img: Battery_Luminous_RC25000_200AH,
      title: 'Batteries',
      fullfilledBy: '@Exide & Luminous',
    },
  ];  

const ProductCategories = () => {
    return (
        <div style={{ "marginTop": "1%" }}>
            <ImageList sx={{ width: '100%', height: 1000 }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.fullfilledBy}</span>}
                            position="below"
                        />
                        {/* <ImageListItemBar
                            title={item.title}
                            subtitle={item.fullfilledBy}
                            actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoIcon /> 
                            </IconButton>
                            }
                        /> */}
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default ProductCategories
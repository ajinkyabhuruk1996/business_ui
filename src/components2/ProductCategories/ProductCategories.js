import React from 'react';
// import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/system';
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
        category: 'solarheater',
    },
    {
        img: solarPanelsWhiteBcg,
        title: 'Solar Panels',
        fullfilledBy: '@ashirvad solar',
        category: 'solarpanel',
    },
    {
      img: generator5kv,
      title: 'Generator',
      fullfilledBy: '@kohler & kirloskar',
      category: 'generators',
    },
    {
      img: cpPlusCamera,
      title: 'Security Solutions',
      fullfilledBy: '@Sarvadnya Infosulutions',
      category: 'securitysolns',
    },
    {
      img: Battery_Luminous_RC25000_200AH,
      title: 'Batteries',
      fullfilledBy: '@Exide & Luminous',
      category: 'batteries',
    },
  ];  

const ImageListItemWithStyle = styled(ImageListItem)(({ theme }) => ({
    "&:hover": {
      cursor: "pointer",
      opacity: 0.7,
      // border: `solid 5px gray`,
      // boxShadow: `5px 10px ${theme.palette.primary.main}`,
    },
}));



const ProductCategories = () => {
    
    const navigate = useNavigate();

    return (
        <div style={{ "marginTop": "1%" }}>
            <ImageList sx={{ width: '100%', height: 1000 }}>
                {itemData.map((item) => (
                    <ImageListItemWithStyle key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => navigate(`/productlist/${item.category}`)}
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
                    </ImageListItemWithStyle>
                ))}
            </ImageList>
        </div>
    )
}

export default ProductCategories
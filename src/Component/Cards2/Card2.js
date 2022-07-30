import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Cards2({data}){
    return (
       

        <diV className='bigpage1'>
        <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
            {
                <h1>{data.title}</h1>
            }
            
        </Carousel>

        </diV>
    )
}
export default Cards2
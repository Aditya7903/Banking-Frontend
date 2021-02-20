import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
    return (
        <Slider {...settings}>
        <div >
            
                <img src= "/images/bg.jpg" height="300px" weidth="1000px" />
           
        </div>
        <div  >
            
        <img src= "/images/bg.jpg"  alt=""/>  
        
        </div>
        <div >
            
        <img src= "/images/bg.jpg" alt=""/>
    
        </div>
    </Slider>
    )
}

export default Carousel


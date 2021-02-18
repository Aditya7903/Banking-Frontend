import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
    return (
        <Slider {...settings}>
        <div >
            <div style={{height:'300px',background:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h3>Slide 1</h3>
            </div>
        </div>
        <div >
            <div style={{height:'300px',background:'orange',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h3>Slide 1</h3>
            </div>
        </div>
        <div >
            <div style={{height:'300px',background:'yellow',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h3>Slide 1</h3>
            </div>
        </div>
    </Slider>
    )
}

export default Carousel


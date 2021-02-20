import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../bg_1.jpg'
import Img2 from '../bg.jpg'
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
            <div className="slider_container">
                <img src ={Img1} alt=""/>
                <div className="text_conatiner">
                    <p>State Bank of India</p>
                </div>
            </div>
        </div>
        <div >
            <div className="slider_container">
            <img src ={Img2} alt=""/>
                <div className="text_conatiner">
                <p>State Bank of India</p>
                </div>
            </div>
        </div>
        <div >
            <div className="slider_container">
            <img src ={Img1} alt=""/>
                <div className="text_conatiner">
                <p>State Bank of India</p>
                </div>
            </div>
        </div>
    </Slider>
    )
}

export default Carousel


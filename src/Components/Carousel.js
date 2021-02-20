import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../b2.jpg'
import Img2 from '../b5.jpg'
import Img3 from '../b6.jpg'
function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
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
                <p>Everyday is a bank account, and time is our currency. </p>
                </div>
            </div>
        </div>
        <div >
            <div className="slider_container">
            <img src ={Img3} alt=""/>
                <div className="text_conatiner">
                <p>We serve you gain.</p>
                </div>
            </div>
        </div>
    </Slider>
    )
}

export default Carousel


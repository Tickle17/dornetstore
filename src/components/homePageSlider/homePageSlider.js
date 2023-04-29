import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyle.css"
import pled from "../../imgs/Плед-спальник-transformed.png"
import beysbolka from "../../imgs/Бейсболка-transformed.png"
import brelok from "../../imgs/Мультитул-transformed.png"
import termos from "../../imgs/Термос-transformed.png"
import lighter from "../../imgs//фонарик-Q20IulPYS-transformed.png"


export default function HomePageSlider() {
   let settings = {
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      swipeToSlide: true,

   };
   return (
      <div className="my-slider" style={{maxWidth:"1200px"}}>
         <Slider {...settings}>
            <div >
               <img  src={beysbolka} alt="картинка"/>
            </div>
            <div>
               <img src={pled} alt="картинка"/>
            </div>
            <div>
               <img src={brelok} alt="картинка"/>
            </div>
            <div>
               <img src={termos} alt="картинка"/>
            </div>
            <div>
               <img src={lighter} alt="картинка"/>
            </div>
         </Slider>

      </div>
   );
}
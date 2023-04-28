import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyle.css"


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
               <img  src="https://picsum.photos/id/1015/1000/540" alt="картинка"/>
            </div>
            <div>
               <img src="https://picsum.photos/id/1016/1000/540" alt="картинка"/>
            </div>
            <div>
               <img src="https://picsum.photos/id/1013/1000/540" alt="картинка"/>
            </div>
            <div>
               <img src="https://picsum.photos/id/1018/1000/540" alt="картинка"/>
            </div>
            <div>
               <img src="https://picsum.photos/id/1019/1000/540" alt="картинка"/>
            </div>
            <div>
               <img src="https://picsum.photos/id/1014/1000/540" alt="картинка"/>
            </div>
         </Slider>

      </div>
   );
}
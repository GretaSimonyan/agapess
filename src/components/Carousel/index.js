import React from 'react';
import {
    View,
} from '../../styled';
import cover1 from '../../assets/images/cover1.jpg';
import cover2 from '../../assets/images/cover2.jpg';
import cover3 from '../../assets/images/cover3.jpg';
import cover4 from '../../assets/images/cover4.jpg';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component{
    render(){
        let settings = {
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          };
        return(
            <View overflow='hidden' pos='relative' >
                <Slider {...settings}>
                    <View bgImg={cover1} w='100%' h='100vh' h_m='60vw' h_s='60vw' bgSize='cover'/>
                    <View bgImg={cover2} w='100%' h='100vh' h_m='60vw' h_s='60vw' bgSize='cover'/>
                    <View bgImg={cover3} w='100%' h='100vh' h_m='60vw' h_s='60vw' bgSize='cover'/>
                    <View bgImg={cover4} w='100%' h='100vh' h_m='60vw' h_s='60vw' bgSize='cover'/>
                </Slider>
            </View>
        )
    }
}

export default Carousel;
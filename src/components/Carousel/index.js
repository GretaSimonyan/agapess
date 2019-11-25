import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';
import cover1 from '../../assets/images/cover1.jpg';
import cover2 from '../../assets/images/cover2.jpg';
import cover3 from '../../assets/images/cover3.jpg';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Image=styled.img`
    width: 100%;
    height: 100vh;
`;

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
            <View overflow='hidden'>
                <Slider {...settings}>
                    <View>
                        <Image src={cover1}/>
                    </View>
                    <View>
                        <Image src={cover2}/>
                    </View>
                    <View>
                        <Image src={cover3}/>
                    </View>
                </Slider> 
            </View>
            
        )
    }
}

export default Carousel;
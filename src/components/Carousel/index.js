import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';
import cover1 from '../../assets/images/cover1.jpg';

const Image=styled.img`
    width: 100%;
    height: 100vh;
`;

class Carousel extends React.Component{
    render(){
        return(
            <View>
                <Image src={cover1}/>
            </View>
        )
    }
}

export default Carousel;
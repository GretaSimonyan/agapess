import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import { View } from '../../styled';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import {FaTimes as CloseButton} from  "react-icons/fa";

const ScrollOff = createGlobalStyle`
    body{
        overflow: hidden
    }
`;
const Close = styled(View)`
    &:hover{
        opacity: 1
    }
`;

class ZoomSlider extends React.Component {
    componentWillMount(){
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }
    componentWillUnmount(){
        document.body.removeChild(this.root);
    }
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: this.props.showModalIndex,
            adaptiveHeight: true,
            adaptiveWidth: true,
            // appendDots: dots => (
            //     <View c='red'>
            //       <ul> {dots} </ul>
            //     </View>
            //   )
        };
        // console.log(this.props.showModalIndex, this.props.arr);
        return(
            ReactDOM.createPortal(
                <View z='99' flex w='100vw' h="100vh" bgColor='rgba(0,0,0,0.7)' pos='fixed' top='0' left='0'>
                    <ScrollOff/>
                    <Close onClick={this.props.onClose}
                        op='0.5'
                        c='white'
                        right='0'
                        border='none'
                        pos='absolute'
                        fontSize='30px'
                        cursor='pointer'
                        mR='2%'
                    >
                        <CloseButton/>
                    </Close>
                    <View w='50%' m='auto' pos='relative'>
                        {this.props.children}
                        <View w='100%' m='auto' pos='relative'>
                            <Slider {...settings}>
                                {
                                    this.props.arr.map( (i) =>(
                                        <View bgImg={i} 
                                            w='100%' 
                                            h='97vh' 
                                            bgPos='center'
                                            bgSize='contain' 
                                            bgRep='no-repeat' 
                                        />
                                        )
                                    )
                                }
                            </Slider>
                        </View>
                    </View>
                </View>,
                this.root
            )
        )
    }
}

export default ZoomSlider;
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import { View } from '../../styled';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
// import json from '../CollectionIntro/collection.json';

import col1 from '../../assets/images/col1.jpg';

const ScrollOff = createGlobalStyle`
    body{
        overflow: hidden
    }
`;
const Close = styled(View)`
    cursor: pointer;
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
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        console.log(this.props.showModalIndex);
        return(
            ReactDOM.createPortal(
                <View z='99' flex w='100vw' h="100vh" bgColor='rgba(0,0,0,0.7)' pos='fixed' top='0' left='0'>
                    <ScrollOff/>
                    <View w='50%' m='auto' pos='relative'>
                        <Close onClick={this.props.onClose} right='0' border='none' fontSize='25px' pos='absolute' c='white' op='0.5'>
                            X
                        </Close>
                        {this.props.children}
                        <View w='75%' border='0.1px solid rgba(255,255,255,0.3)' m='auto' pos='relative'>
                            <Slider {...settings}>
                                {/* {
                                    this.props.map( () => {
                                        // let pic = json[key].pictures;
                                        // pic.map( (i) => (
                                        //     <View bgImg={i} w='100%' h='95vh' bgSize='contain' bgRep='no-repeat' bgPos='center'/>
                                        //     )
                                        // )
                                        console.log(this.props.id)
                                    })
                                } */}
                                {/* {
                                    (json[this.props.showModalIndex] )
                                } */}
                                <View bgImg={col1} w='100%' h='95vh' bgSize='contain' bgRep='no-repeat' bgPos='center'/>
                                <View bgImg={col1} w='100%' h='95vh' bgSize='contain' bgRep='no-repeat' bgPos='center'/>
                                <View bgImg={col1} w='100%' h='95vh' bgSize='contain' bgRep='no-repeat' bgPos='center'/>
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
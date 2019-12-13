import React from 'react';
import styled from 'styled-components';

import {
    View,
} from '../../styled';

import p1 from '../../assets/images/01.jpg';
import p2 from '../../assets/images/02.jpg';
import p3 from '../../assets/images/03.jpg';
import p4 from '../../assets/images/04.jpg';
import p5 from '../../assets/images/05.jpg';
import p6 from '../../assets/images/06.jpg';
import p7 from '../../assets/images/07.jpg';
import p8 from '../../assets/images/08.jpg';
import p9 from '../../assets/images/09.jpg';
import p10 from '../../assets/images/010.jpg';

const Image=styled.img`
    width: 100%; 
    &:hover {
        opacity: 0.8;
        box-shadow: -1px -2px 25px 7px rgba(143,143,143,0.4);
    }
`;

class Collections extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            item: [
                {
                    id: 1,
                    src: p1,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 2,
                    src: p2,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 3,
                    src: p3,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 4,
                    src: p4,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 5,
                    src: p5,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 6,
                    src: p6,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 7,
                    src: p7,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 8,
                    src: p8,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 9,
                    src: p9,
                    title: "Dressers",
                    link: "Learn more",
                },
                {
                    id: 10,
                    src: p10,
                    title: "Dressers",
                    link: "Learn more",
                },
            ],
        }
    }
    renderItem = () => (
        this.state.item.map( (item) => (
            <View tAlign='center' w='350px' m='20px 10px' c='#7D1D1E'>
                <Image src={item.src}/>
                <View fontSize='40px' fontW='700'> {item.title} </View>
                <View fontSize='13px'> <a href='#'>{item.link}</a> </View>
            </View>
        ) )
    )
    render(){
        return(
            <View p='40px' bT='solid 1px rgba(170,170,170,0.5)'>
                <View tAlign='center' fontSize='45px'>Collections</View>
                <View flex fW='wrap' justC='center' m='20px 40px'>
                    {this.renderItem()}
                </View>
            </View>
        )
    }
}

export default Collections;
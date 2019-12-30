import React from 'react';
import styled from 'styled-components';

import {
    View,
} from '../../styled';

import p1 from '../../assets/images/col1.jpg';
import p2 from '../../assets/images/col2.jpg';
import p3 from '../../assets/images/col3.jpg';
import p4 from '../../assets/images/col4.jpg';
import p5 from '../../assets/images/col5.jpg';
import p6 from '../../assets/images/col6.jpg';
import p7 from '../../assets/images/col7.jpg';
import p8 from '../../assets/images/col8.jpg';
import p9 from '../../assets/images/col9.jpg';
import p10 from '../../assets/images/col10.jpg';

const Image=styled.img`
    width: 100%; 
    &:hover {
        opacity: 0.9;
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
                    title: "Sweaters",
                    link: "Learn more",
                },
                {
                    id: 2,
                    src: p2,
                    title: "Blouses",
                    link: "Learn more",
                },
                {
                    id: 3,
                    src: p3,
                    title: "Cardigans",
                    link: "Learn more",
                },
                {
                    id: 4,
                    src: p4,
                    title: "Coats",
                    link: "Learn more",
                },
                {
                    id: 5,
                    src: p5,
                    title: "Tunicas",
                    link: "Learn more",
                },
                {
                    id: 6,
                    src: p6,
                    title: "Panchos",
                    link: "Learn more",
                },
                {
                    id: 7,
                    src: p7,
                    title: "Shawls",
                    link: "Learn more",
                },
                {
                    id: 8,
                    src: p8,
                    title: "Scarfs",
                    link: "Learn more",
                },
                {
                    id: 9,
                    src: p9,
                    title: "Dresses",
                    link: "Learn more",
                },
                {
                    id: 10,
                    src: p10,
                    title: "Gilets",
                    link: "Learn more",
                },
            ],
        }
    }
    renderItem = () => (
        this.state.item.map( (item, id) => (
            <View key={id} tAlign='center' w='350px' m='20px 10px' c='#7D1D1E'>
                <Image src={item.src}/>
                <View fontSize='50px' fontW='700'> {item.title} </View>
                {/* <View fontSize='13px'> <a href='#'>{item.link}</a> </View> */}
            </View>
        ) )
    )
    render(){
        return(
            <View  bT='solid 1px rgba(170,170,170,0.5)'>
                <View tAlign='center' fontSize='45px' op='0.5'>Collections</View>
                <View flex fW='wrap' justC='center' m='0px 200px'>
                    {this.renderItem()}
                </View>
            </View>
        )
    }
}

export default Collections;
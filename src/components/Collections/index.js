import React from 'react';
// import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
// import CollextionIntro from '../../pages/CollextionIntro';

import {
    View,
    Text
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

// const Image=styled.img`
//     width: 100%; 
//     &:hover {
//         opacity: 0.9;
//         box-shadow: -1px -2px 25px 7px rgba(143,143,143,0.4);
//     }
// `;

// const Link = styled.a`
//     display: block;
// `;

class Collections extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            item: [
                {
                    id: 1,
                    src: p1,
                    title: "sweaters",
                    link: "Learn more",
                },
                {
                    id: 2,
                    src: p2,
                    title: "blouses",
                    link: "Learn more",
                },
                {
                    id: 3,
                    src: p3,
                    title: "cardigans",
                    link: "Learn more",
                },
                {
                    id: 4,
                    src: p4,
                    title: "coats",
                    link: "Learn more",
                },
                {
                    id: 5,
                    src: p5,
                    title: "tunicas",
                    link: "Learn more",
                },
                {
                    id: 6,
                    src: p6,
                    title: "panchos",
                    link: "Learn more",
                },
                {
                    id: 7,
                    src: p7,
                    title: "shawls",
                    link: "Learn more",
                },
                {
                    id: 8,
                    src: p8,
                    title: "scarfs",
                    link: "Learn more",
                },
                {
                    id: 9,
                    src: p9,
                    title: "dresses",
                    link: "Learn more",
                },
                {
                    id: 10,
                    src: p10,
                    title: "gilets",
                    link: "Learn more",
                },
            ],
        }
    }
    renderItem = () => (
        this.state.item.map( (item, id) => (
            <View key={id} flex alignI='flex-end' justC='center' bgImg={item.src} w='350px' h='538px' m='20px 10px'>
                <View  flex justC='center' bgColor='rgba(0,0,0,0.4)' w='100%'>
                    <Text fontSize='52px' fontW='700' c='white' tTf='uppercase' p='10px 0'>
                        {item.title}
                    </Text>
                </View>
                {/* <NavLink to={"/" + item.title}> click </NavLink> */}
            </View>
        ) )
    )
    render(){
        return(
            <View id='collections' p='100px 0' bT='solid 1px rgba(170,170,170,0.5)'>
                <View tAlign='center' fontSize='45px' op='0.5'>Collections</View>
                <View flex fW='wrap' justC='center' m='0px 100px'>
                    <NavLink to='/CollextionIntro'> click </NavLink>
                    {/* <Route path='/CollextionIntro' component={CollextionIntro} /> */}
                    {this.renderItem()}
                </View>
            </View>
        )
    }
}

export default Collections;
import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';
import View from '../../styled/View';

const Logo=styled.img`
    width: 130px;
`;
const Link=styled.a`
    margin: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
`;

class Header extends React.Component{
    render(){
        return(
            <View flex z='99' boxS='border-box' position='fixed' alignI='center' justC='space-between' m="0 auto" w='100%' p="20px 70px" bgColor='#751f1e'>
                <View><a href='#'><Logo src={logoWhite}/></a></View>
                <View flex >
                    <View><Link href='#'>About</Link></View>
                    <View><Link href='#'>Collections</Link></View>
                    <View><Link href='#'>Contact</Link></View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View w='20px' m='10px' color='white'><a href='#'><img src={fb}/></a></View>
                    <View w='20px' m='10px' color='white'><a href='#'><img src={insta}/></a></View>
                </View>
            </View>
        )
    }
}

export default Header;
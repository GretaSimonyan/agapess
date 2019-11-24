import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';
import View from '../../styled/View';

const Logo=styled.img`
    width: 130px;
    height: 40px;
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
            <View flex alignI='center' justC='space-between' m="0 auto" p="15px 50px" bgColor='brown'>
                <Logo className='logo' src={logoWhite}/>
                <View flex alignI='center' justiC='space-between'>
                    <View><Link href='#'>About</Link></View>
                    <View><Link href='#'>Collections</Link></View>
                    <View><Link href='#'>Contact</Link></View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View border='solid white 1px' borderR='100px' p='5px' m='10px' color='white'><img src={fb}/></View>
                    <View border='solid white 1px' borderR='100px' p='5px' m='15px' color='white'><img src={insta}/></View>
                </View>
            </View>
        )
    }
}

export default Header;
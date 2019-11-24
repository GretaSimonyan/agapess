import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
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
            <View flex alignI='center' justC='space-between' margin="0 auto" padding="15px 50px" bgColor='brown'>
                <Logo className='logo' src={logoWhite}/>
                <View flex alignI='center' justiC='space-between'>
                    <View><Link href='#'>About</Link></View>
                    <View><Link href='#'>Collections</Link></View>
                    <View><Link href='#'>Contact</Link></View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View margin='15px' color='white'><img src={facebook}/></View>
                    <View margin='15px' color='white'><img src={instagram}/></View>
                </View>
            </View>
        )
    }
}

export default Header;
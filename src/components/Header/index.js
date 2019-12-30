import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';

import {TiSocialFacebookCircular,TiSocialInstagramCircular} from "react-icons/ti";

import {
    View,
} from '../../styled';

const Logo = styled.img`
    width: 200px;
`;
const Link = styled.a`
    margin: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
`;
const SocialLink = styled.a`
    text-decoration: none;
    color: white;
`;
const Fb = styled(TiSocialFacebookCircular)`
    font-size: 30px;
`;
const Insta = styled(TiSocialInstagramCircular)`
    font-size: 30px;
`;

class Header extends React.Component{
    render(){
        return(
            <View flex z='99' boxS='border-box' pos='fixed' alignI='center' justC='space-between' m="0 auto" w='100%' p="20px 70px" bgColor='#ff706a'>
                <View><a href='#'><Logo src={logoWhite}/></a></View>
                <View flex >
                    <View><Link href='#'>About</Link></View>
                    <View><Link href='#'>Collections</Link></View>
                    <View><Link href='#'>Contact</Link></View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View w='20px' m='10px' color='white'>
                        <SocialLink href='#'>
                            <Fb/>
                        </SocialLink>
                    </View>
                    <View w='20px' m='10px' color='white'>
                        <SocialLink href='#'>
                            <Insta/>
                        </SocialLink>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;
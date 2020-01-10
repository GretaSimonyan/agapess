import React from 'react';
import styled from 'styled-components';

import {
    View,
} from '../../styled';

import {TiSocialFacebookCircular,TiSocialInstagramCircular} from "react-icons/ti";

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

function Footer(){
    return(
        <View id='contact' flex p='20px 70px' c='white' bgColor='#ff706a' justC='space-between' alignI='center'>
            <View boxS='border-box' fontSize='18px'>
                <View boxS='border-box'>Address:</View>
                <View boxS='border-box'>Phone:</View>
                <View boxS='border-box'>E-mail:</View>
            </View>
            <View tAlign='center' fontSize='20px' lsp='3px'>
                <View>HANDMADE COLLECTION</View>
                <View>by Astghik Sahakyan</View>
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

export default Footer;
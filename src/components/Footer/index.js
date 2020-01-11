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
        <View id='contact' flex p='10px 0px' c='white' bgColor='#ff706a' justC='center' alignI='center'>
            <View w='80%' flex justC='space-between'>
                <View boxS='border-box' fontSize='16px'>
                    <View boxS='border-box'>Address:</View>
                    <View boxS='border-box'>Phone:</View>
                    <View boxS='border-box'>E-mail:</View>
                </View>
                <View flex alignI='center' fD='column'  fontSize='18px' lsp='3px'>
                    <View>HANDMADE COLLECTION</View>
                    <View>by Astghik Sahakyan</View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View m='10px' color='white'>
                        <SocialLink href='#'>
                            <Fb/>
                        </SocialLink>
                    </View>
                    <View m='10px' color='white'>
                        <SocialLink href='#'>
                            <Insta/>
                        </SocialLink>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Footer;
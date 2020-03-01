import React from 'react';
import styled from 'styled-components';
import {TiSocialFacebookCircular as Fb, TiSocialInstagramCircular as Insta} from "react-icons/ti";

import {
    View,
} from '../../styled';

const SocialLink = styled.a`
    color: white;
    font-size: 29px;
`;

function Footer(){
    return(
        <View id='contact' flex p='10px 0px' c='white' bgColor='#ff706a' justC='center' alignI='center' boxS='border-box'>
            <View w='80%' flex justC='space-between' alignI="center" fD_m="column" fD_s='column'>
                <View boxS='border-box' fontSize='15px' fontSize_m='13px' fontSize_s='12px'>
                    <View boxS='border-box'>Address:</View>
                    <View boxS='border-box'>Phone:</View>
                    <View boxS='border-box'>E-mail:  studioss21@yahoo.com</View>
                </View>
                <View flex alignI='center' fD='column' m_m="15px 0" mT_s="20px" fontSize='16px' fontSize_m='15px' fontSize_s='13px' lsp='3px'>
                    <View>HANDMADE COLLECTION</View>
                    <View>by Astghik Sahakyan</View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View m='10px' m_m="2px" m_s="2px">
                        <SocialLink href='#'>
                            <Fb/>
                        </SocialLink>
                    </View>
                    <View m='10px' m_m="2px" m_s="2px">
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
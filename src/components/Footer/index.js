import React from 'react';
import Fade from 'react-reveal/Fade';
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
                <Fade left>
                    <View boxS='border-box' fontSize='15px' fontSize_m='13px' fontSize_s='12px'>
                        <View boxS='border-box'>Address:</View>
                        <View boxS='border-box'>Phone:</View>
                        <View boxS='border-box'>E-mail:  studioss21@yahoo.com</View>
                    </View>
                </Fade>
                <Fade top>
                    <View flex 
                        lsp='3px'
                        fD='column' 
                        mT_s="20px" 
                        m_m="15px 0" 
                        alignI='center' 
                        fontSize='16px' 
                        fontSize_m='15px' 
                        fontSize_s='13px' 
                    >
                        <View>HANDMADE COLLECTION</View>
                        <View>by Astghik Sahakyan</View>
                    </View>
                </Fade>
                <Fade right>
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
                </Fade>
            </View>
        </View>
    )
}

export default Footer;
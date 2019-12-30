import React from 'react';

import {
    View,
} from '../../styled';

import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';

function Footer(){
    return(
        <View flex p='20px 70px' c='white' bgColor='#ff706a' justC='space-between' alignI='center'>
            <View boxS='border-box'>
                <View boxS='border-box'>Address:</View>
                <View boxS='border-box'>Phone:</View>
                <View boxS='border-box'>E-mail:</View>
            </View>
            <View tAlign='center' fontSize='20px' lsp='3px'>
                <View>HANDMADE COLLECTION</View>
                <View>by Astghik Sahakyan</View>
            </View>
            <View flex justC="space-between" alignI='center'>
                <View w='20px' m='0 5px'><a href='#'><img src={fb}/></a></View>
                <View w='20px' m='0 5px'><a href='#'><img src={insta}/></a></View>
            </View>
        </View>
    )
}

export default Footer;
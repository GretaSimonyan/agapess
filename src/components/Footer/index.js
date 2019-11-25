import React from 'react';
import View from '../../styled/View';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';

class Footer extends React.Component{
    render(){
        return(
            <View flex p='20px 70px' color='white' bgColor='#751f1e' justC='space-between' alignI='center'>
                <View boxS='border-box'>
                    <View boxS='border-box'>Address:</View>
                    <View boxS='border-box'>Phone:</View>
                    <View boxS='border-box'>E-mail:</View>
                </View>
                <View textAlign='center' fontSize='20px' letter-spacing='3px'>
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
}

export default Footer;
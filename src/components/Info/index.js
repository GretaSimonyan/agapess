import React from 'react';
import {
    View,
    Text,
} from '../../styled';
import tel from '../../assets/images/tel.jpg';

function Info(){
    return(
        <View 
            flex 
            p='100px 0' 
            bgImg={tel} 
            bgSize='45%' 
            bgPos='left' 
            justC='center' 
            alignI='center' 
            bgSize_m='100%' 
            bgSize_s='100%' 
            bgRep='no-repeat' 
            // bgPos_m='left top' 
        >
            <View flex 
                w='80%' 
                justC='flex-end'
                bRad='8px' 
                c_m='white'
                c_s='white'
                bgColor_m='rgba(0,0,0,0.5)' 
                bgColor_s='rgba(0,0,0,0.5)' 
                >
                <View w='50%' w_m='100%' w_s='100%' p='15px'>
                    <Text fontSize='14px' lh='1.65'>
                        If you want to have the best kintted outfit that is unique and different from another knitted clothes, you have to wear Studios 21. Our products are unique and one of a kind, one another is a unique piece of art. Who want to act different has to wear our knitted clothes. Do not hesitate to contact us and get your unique masterpiece. Hope you’ll find your own clothes. Have a great shopping with us.
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Info;
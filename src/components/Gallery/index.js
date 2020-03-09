import React from 'react';
import { View } from '../../styled';
import photo1 from '../../assets/images/photo1.jpg';

function Gallery (){
    return(
        <View>
            <View bgImg={photo1} 
                w='100%' 
                h='35vw' 
                mB='-3.2px' 
                bgPos='center'
                bgSize='cover' 
                bgRep='no-repeat' 
            />
        </View>
    )
}

export default Gallery;
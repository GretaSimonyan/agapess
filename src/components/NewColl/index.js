import React from 'react';
import { View } from '../../styled';
import newcollection from '../../assets/images/newcollection.jpg';

function NewColl(){
    return(
        <View>
            <View bgImg={newcollection}
                w='100%' 
                h='45vw' 
                bgPos='center' 
                bgSize='cover' 
                bgRep='no-repeat' 
                border='solid 1px rgba(170,170,170,0.5)'
            />
        </View>
    )
}

export default NewColl;
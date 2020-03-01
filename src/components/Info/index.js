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
            alignI='center' 
            justC='center' 
            bgImg={tel} 
            bgRep='no-repeat' 
            bgSize='45%' 
            bgSize_m='100%' 
            bgSize_s='100%' 
            bgPos='left' 
            bgPos_m='left top' 
            p='75px 0' 
        >
            <View flex 
                w='80%' 
                justC='flex-end'
                bRad='8px' 
                c_m='white'
                c_s='white'
                bgColor_m='rgba(0,0,0,0.3)' 
                bgColor_s='rgba(0,0,0,0.3)' 
                >
                <View w='50%' w_m='100%' w_s='100%'>
                    <Text fontSize='14px' lh='1.65'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Info;
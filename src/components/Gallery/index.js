import React from 'react';
import styled from 'styled-components';

import {
    View,
} from '../../styled';

import photo1 from '../../assets/images/photo1.jpg';

const Photo = styled.img`
    width: 100%; 
`;

function Gallery (){
    return(
        <View>
            <Photo src={photo1}/>
        </View>
    )
}

export default Gallery;
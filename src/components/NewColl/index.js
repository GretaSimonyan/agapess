import React from 'react';
import styled from 'styled-components';
import { View } from '../../styled';
import newcollection from '../../assets/images/newcollection.jpg';

const Image = styled.img`
    width: 100%; 
    border-bottom: solid 1px rgba(170,170,170,0.5);
    border-top: solid 1px rgba(170,170,170,0.5);
`;

function NewColl(){
    return(
        <View>
            <Image src={newcollection}/>
        </View>
    )
}

export default NewColl;
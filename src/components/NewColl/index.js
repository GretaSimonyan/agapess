import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';
import new1 from '../../assets/images/new1.jpg';

const Image=styled.img`
    width: 100%; 
`;

class NewColl extends React.Component{
    render(){
        return(
            <View>
                <Image src={new1}/>
            </View>
        )
    }
}

export default NewColl;
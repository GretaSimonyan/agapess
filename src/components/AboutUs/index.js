import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';
import Text from '../../styled/Text';
import about1 from '../../assets/images/about1.jpg';

const Image=styled.img`
`;

class AboutUs extends React.Component{
    render(){
        return(
            <View flex m='70px'>
                <View>
                    <Image src={about1}/>
                </View>
                <View flex m='30px 0 30px 30px' flexD='column'>
                    <Text fontSize='20px' p='0 50px 0 80px'><h1>About Us</h1></Text>
                    <Text lineH='1.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <Text>by Astghik Sahakyan</Text>
                </View>
            </View>
        )
    }
}

export default AboutUs;
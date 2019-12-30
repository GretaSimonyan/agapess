import React from 'react';
import styled from 'styled-components';

import {
    View,
    Text,
} from '../../styled';

import red from '../../assets/images/red.jpg';
import byAstghik from '../../assets/images/byAstghik.png';

const ByA = styled.img`
    margin: 20px 0;
    width: 220px;
    height: 40px;
`;

function AboutUs(){
    return(
        <View flex alignI='center' justC='flex-start' bgColor='#ffb5b2' h='100vh'>
            <img src={red}/>
            <View flex w='50%' fD='column' mL='10%' >
                <Text fontSize='30px' m='0 auto'><h1>About Us</h1></Text>
                <Text fontSize='18px' lh='2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                <View flex justC='flex-end'><ByA src={byAstghik}/></View>
            </View>
        </View>
    )
}

export default AboutUs;
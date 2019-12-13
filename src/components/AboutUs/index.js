import React from 'react';

import {
    View,
    Text,
} from '../../styled';

import about1 from '../../assets/images/about1.jpg';

class AboutUs extends React.Component{
    render(){
        return(
            <View flex m='100px' alignI='center' justC='space-around'>
                <img src={about1}/>
                <View flex  w='800px' fD='column'>
                    <Text fontSize='20px' m='0 auto'><h1>About Us</h1></Text>
                    <Text lh='2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                    <Text fontW='700' tAlign='end' fontSize='20px' m='20px 0'>by Astghik Sahakyan</Text>
                </View>
            </View>
        )
    }
}

export default AboutUs;
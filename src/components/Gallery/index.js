import React from 'react';
import View from '../../styled/View';
import gal1 from '../../assets/images/gal1.jpg';

class Gallery extends React.Component{
    render(){
        return(
            <View flex justC='center' alignI='center' p='75px 0' borderB='solid 1px rgba(170,170,170,0.5)' >
                <img src={gal1}/>
                <img src={gal1}/>
                <img src={gal1}/>
                <img src={gal1}/>
                <img src={gal1}/>
            </View>
        )
    }
}

export default Gallery;
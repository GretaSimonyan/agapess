import React from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import AboutUs from '../../components/AboutUs';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Carousel/>
                <AboutUs/>
            </div>
        )
    }
}

export default Home;
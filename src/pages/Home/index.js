import React from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Carousel/>
            </div>
        )
    }
}

export default Home;
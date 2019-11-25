import React from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import AboutUs from '../../components/AboutUs';
import Collections from '../../components/Collections';
import NewColl from '../../components/NewColl';
import Gallery from '../../components/Gallery';
import Info from '../../components/Info';
import Footer from '../../components/Footer';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Carousel/>
                <AboutUs/>
                <Collections/>
                <NewColl/>
                <Gallery/>
                <Info/>
                <Footer/>
            </div>
        )
    }
}

export default Home;
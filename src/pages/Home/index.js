import React from 'react';
import { 
    Header, 
    Carousel,
    AboutUs,
    Collections,
    NewColl,
    Gallery,
    Info,
    Footer,
} from '../../components';

function Home() {
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

export default Home;
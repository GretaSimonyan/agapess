import React from 'react';
import { 
    Header, 
    Carousel,
    AboutUs,
    Collections,
    NewColl,
    Info,
    Gallery,
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
            <Info/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

export default Home;
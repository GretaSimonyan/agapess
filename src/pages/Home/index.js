import React from 'react';
import Fade from 'react-reveal/Fade';
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
            <Fade bottom>
                <Collections/>
            </Fade>
            <Fade right>
                <NewColl/>
            </Fade>
            <Info/>
            <Fade right>
                <Gallery/>
            </Fade>
            <Footer/>
        </div>
    )
}

export default Home;
import React from 'react';
import {
    View,
    Text,
} from '../../styled';
import red from '../../assets/images/red.png';
import byAstghik from '../../assets/images/byAstghik.png';

function AboutUs(){
    return(
        <View id="about"
            flex
            fD='row'
            p='120px 0'
            bgImg={red}
            bgSize='42%'
            bgPos='left'
            alignI='center'
            justC='center'
            bgRep='no-repeat'
            bgColor='#ffb5b2'
        >
            <View w='80%' flex justC='flex-end'>
                <View flex w='50%' fD='column'>
                    <Text fontSize='18px' m='0 auto'><h1>About Us</h1></Text>
                    <Text fontSize='15px' lh='1.65'>
                        We are happy to introduce our new brand, named Studios 21 after ArtStar Illusions which was 
                        found by Astghik Sahakyan in 1980 in Yerevan, Armenia. In 1980 the journey become since today.  
                        As you can see our company is almost 40 years  old.  Our handmade crafts are only made of qualified 
                        yarn from 15-95% wool and we also use 100% acryl.  Astghik was just 16 years old when she started knitting 
                        and selling her piece of arts in studios and clothing boutiques. She introduced her knittings all over the 
                        world, Russia, Germany, France, Italy, Yugoslavia, Czech Republic, Austria, Ukraine and most of the part of 
                        the USA( California, Las Vegas, New York, Pennsylvania). She presents the nations her wonderful knitted stuff which 
                        are cardigans, blouses, panchos, scarfs, dresses, coats etc, anything that can be knitted. We have shared our works 
                        through Armenia, most of Europe and America and that’s just the beginning of our journey. Lot’s of new places are on the 
                        way to come. For More information and business inquiries you can contact us at Studios21@yahoo.com. 
                    </Text>
                    <View flex justC='flex-end'>
                        <View w='220px' h='40px' m='20px 0' bgImg={byAstghik} bgSize='contain' bgRep='no-repeat'/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AboutUs;
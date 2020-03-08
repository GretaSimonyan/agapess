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
            p='100px 0'
            bgImg={red}
            bgSize='35%'
            bgSize_m='100%'
            bgSize_s='100%' 
            bgPos='left'
            justC='center'
            alignI='center'
            bgRep='no-repeat'
            bgColor='#ffb5b2'
        >
            <View w='80%' 
                flex 
                bRad='8px' 
                justC='flex-end' 
                c_m='white'
                c_s='white'
                bgColor_m='rgba(0,0,0,0.5)' 
                bgColor_s='rgba(0,0,0,0.5)' 
                >
                <View flex w='50%' w_m='100%' w_s='100%' fD='column' p='10px'>
                    <Text fontSize='18px' m='0 auto 20px auto'>
                        <h1>About Us</h1>
                    </Text>
                    <Text fontSize='12px' lh='1.65'>
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
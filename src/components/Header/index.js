import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';
import { NavLink } from 'react-router-dom';
import {TiSocialFacebookCircular,TiSocialInstagramCircular} from "react-icons/ti";

import {
    View,
} from '../../styled';

const Logo = styled.img`
    width: 160px;
`;
const Link = styled.a`
    margin: 15px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
`;
const SocialLink = styled.a`
    text-decoration: none;
    color: white;
`;
const Fb = styled(TiSocialFacebookCircular)`
    font-size: 30px;
`;
const Insta = styled(TiSocialInstagramCircular)`
    font-size: 30px;
`;

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgcolor: 'rgba(255,255,255,0.1)',
            color: 'black'
        }
    }
    componentDidMount() {
        let hundrid = 100;
        window.addEventListener('scroll', () => {
            if (window.scrollY >= hundrid){
                this.setState(() => ({
                    bgcolor: "#ff706a",
                    color: 'white'
                })
                )
            }
            else {
                this.setState(() => ({
                    bgcolor: "rgba(255,255,255,0.1)",
                })
                )
            }
        });
    }
    render(){
        return(
            <View flex z='99' boxS='border-box' pos='fixed' alignI='center' justC='space-between' m="0 auto" w='100%' p="15px 70px" color={this.state.color} bgColor={this.state.bgcolor}>
                <View><NavLink to='/'><Logo src={logoWhite}/></NavLink></View>
                <View flex>
                    <View><Link href='#about'>About</Link></View>
                    <View><Link href='#collections'>Collections</Link></View>
                    <View><Link href='#contact'>Contact</Link></View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View w='20px' m='10px' color='white'>
                        <SocialLink href='#'>
                            <Fb/>
                        </SocialLink>
                    </View>
                    <View w='20px' m='10px' color='white'>
                        <SocialLink href='#'>
                            <Insta/>
                        </SocialLink>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;
import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';
import logoGray from '../../assets/images/logoGray.png';
import { NavLink } from 'react-router-dom';
import {TiSocialFacebookCircular,TiSocialInstagramCircular} from "react-icons/ti";

import {
    View,
} from '../../styled';

const Logo = styled.img`
    width: 160px;
    // ${ (props) => props.headerType==2 ? `src: ${logoWhite}` : `src: ${logoGray}` }
`;
const SocialLink = styled.a`
    text-decoration: none;
    ${ (props) => props.headerType==2 ? `color: white` : `color: black` }
`;
const Fb = styled(TiSocialFacebookCircular)`
    font-size: 30px;
`;
const Insta = styled(TiSocialInstagramCircular)`
    font-size: 30px;
`;
const Link = styled.a`
    margin: 15px;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    ${ (props) => props.headerType==2 && `color: white` }
`;

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgcolor: 'rgba(255,255,255,0.2)',
            headerType: 1,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100){
                this.setState(() => ({
                    bgcolor: "#ff706a",
                    headerType: 2
                })
                )
            }
            else {
                this.setState(() => ({
                    bgcolor: "rgba(255,255,255,0.2)",
                    headerType: 1
                })
                )
            }
        });
    }
    render(){
        const { headerType } = this.state
        return(
            <View  flex z='99' boxS='border-box' pos='fixed' alignI='center' justC='space-between' m="0 auto" w='100%' p="15px 70px" bgColor={this.state.bgcolor}>
                <View><NavLink to='/'><Logo src={ headerType===2 ? logoWhite : logoGray }/></NavLink></View>
                <View flex>
                    <View><Link headerType={headerType} href='#about'>About</Link></View>
                    <View><Link headerType={headerType} href='#collections'>Collections</Link></View>
                    <View><Link headerType={headerType} href='#contact'>Contact</Link></View>
                </View>
                <View flex justC="space-between" alignI='center'>
                    <View w='20px' m='10px'>
                        <SocialLink headerType={headerType} href='#'>
                            <Fb/>
                        </SocialLink>
                    </View>
                    <View w='20px' m='10px'>
                        <SocialLink headerType={headerType} href='#'>
                            <Insta/>
                        </SocialLink>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;
import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';
import logoGray from '../../assets/images/logoGray.png';
import { NavLink } from 'react-router-dom';
import { TiSocialFacebookCircular, TiSocialInstagramCircular } from "react-icons/ti";

import {
    View,
} from '../../styled';

const SocialLink = styled.a`
    text-decoration: none;
    ${ (props) => props.headerType == 2 ? `color: white` : `color: gray` }
`;
const Fb = styled(TiSocialFacebookCircular)`
    font-size: 30px;
`;
const Insta = styled(TiSocialInstagramCircular)`
    font-size: 30px;
`;
const Link = styled.a`
    margin: 15px;
    color: gray;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px
    ${ (props) => props.headerType == 2 && `color: white` }
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
            if ( window.scrollY >= 100 ){
                this.setState(() => ({
                    bgcolor: "#ff706a",
                    headerType: 2,
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
    scrollHome = () => {
        window.scrollTo(0,0)
    }
    render(){
        const { headerType } = this.state
        return(
            <View flex 
                z='99'
                w='100%'
                m="0 auto"
                p="15px 0"
                pos='fixed'
                justC='center'
                alignI='center'
                boxS='border-box'
                bgColor={this.state.bgcolor}
                boxSh='0px 11px 32px -9px rgba(0, 0, 0, 0.4)'
            >
                <View w='80%' flex justC='space-between' alignI="center" fD_m="column" fD_s='column'>
                    <View>
                        <NavLink to='/'>
                            <View onClick={this.scrollHome}
                                h='50px'
                                w='125px'
                                bgPos='center'
                                bgSize='contain'
                                bgRep='no-repeat'
                                bgImg={ headerType === 2 ? logoWhite : logoGray }
                            />
                        </NavLink>
                    </View>
                    <View flex alignI='center' mT_m="20px">
                        <View><Link headerType={headerType} href='#about'>About</Link></View>
                        <View><Link headerType={headerType} href='#collections'>Collections</Link></View>
                        <View><Link headerType={headerType} href='#contact'>Contact</Link></View>
                    </View>
                    <View flex justC="space-between" alignI='center'>
                        <View m='10px'>
                            <SocialLink headerType={headerType} href='#'>
                                <Fb/>
                            </SocialLink>
                        </View>
                        <View m='10px'>
                            <SocialLink headerType={headerType} href='#'>
                                <Insta/>
                            </SocialLink>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;
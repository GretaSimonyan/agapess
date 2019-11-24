import React from 'react';
import logoWhite from '../../assets/images/logoWhite.png';
import './style.css';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';

class Header extends React.Component{
    render(){
        return(
            <div className='Header'>
                <img className='logo' src={logoWhite}/>
                <ul className="menu">
                    <li><a className="menu-link" href='#'>About</a></li>
                    <li><a className="menu-link" href='#'>Collections</a></li>
                    <li><a className="menu-link" href='#'>Contact</a></li>
                </ul>
                <div className='social'>
                    <div><img className="social-link" src={facebook}/></div>
                    <div><img className="social-link" src={instagram}/></div>
                </div>
            </div>
        )
    }
}

export default Header;
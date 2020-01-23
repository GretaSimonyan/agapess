import React from 'react';
import { View } from '../../styled';
// import json from './collection.json';
import styled from 'styled-components';
import red from '../../assets/images/red.png';

const Slide = styled.img`
    width: "100%";
    height: "100%"
`;

class ZoomSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: 1,
        }
    }
    zoomSlider = () => {
        if(this.state.type == 1){
            this.setState(() => ({
                type: 2,
            }))
        }
        else {
            this.setState(() => ({
                type: 1
            }))
        }
        console.log(this.state.type)
        // let sec = document.createElement("section");
        // document.body.appendChild(sec);
        // sec.style.width = "100vw";
        // sec.style.height = "100vh";
        // sec.style.backgroundColor = "rgba(0,0,0,0.7)";
        // sec.style.position = "absolute";
        // sec.style.top = 0;
        // sec.style.left = 0;
        // sec.style.display = "flex";

			// let content = document.createElement("div");
			// sec.appendChild(content);
			// content.style.width = "70%";
			// content.style.height = "80%";
			// content.style.border = "1px solid white";
			// content.style.margin = "auto";
			// content.style.position = "relative";

			// let but_x = document.createElement("button");
			// content.appendChild(but_x);
			// but_x.innerText = "X";
			// but_x.style.fontSize = "25px";
			// but_x.style.border = "none";
			// but_x.style.outline = "none";
			// but_x.style.position = "absolute";
			// but_x.style.right = 0;
			// but_x.onclick = () => {
			// 	sec.remove();
			// }

			// let img = document.createElement("img");
			// content.appendChild(img);
			// img.src = t.src;
			// img.style.width = "100%";
			// img.style.height = "100%";
    }
    Remove = () => {

    }
    render(){
        return(
            <View flex w='100vw' h="100vh" bgColor='rgba(0,0,0,0.7)' pos='absolute' t='0' l='0'>
                <View w='70%' h="80%" border='1px solid white' m='auto' pos='relative'>
                    <View onClick={this.Remove()} right='0' border='none' fSize='25px' pos='absolute'>
                        X
                    </View>
                    <Slide src={red}/>
                </View>
            </View>
        )
    }
}

export default ZoomSlider;
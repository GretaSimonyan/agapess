import React from 'react';
import { 
    Header,
    Footer,
} from '../../components';
import { View } from '../../styled';
import json from './collection.json';
import styled from 'styled-components';

// const Frame = styled(View)`
//     ${ (props) => props.type == 1 ? `height: 538px` : `height: ${538*2}px` }
// `

// const Sec = styled(View)`

// `

class CollextionIntro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: 1,
        }
    }
    componentDidMount() {
        window.scrollTo(0,0)
    }
    zoomSlider = (t) => {
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
        let sec = document.createElement("section");
        document.body.appendChild(sec);
        // sec.style.width = "100vw";
        // sec.style.height = "100vh";
        // sec.style.backgroundColor = "rgba(0,0,0,0.7)";
        // sec.style.position = "absolute";
        // sec.style.top = 0;
        // sec.style.left = 0;
        // sec.style.display = "flex";
        return(
            <View flex w='100vw' h="100vh" bgColor='rgba(0,0,0,0.7)' pos='absolute' t='0' l='0'>
                
            </View>
        )

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
    renderItem = () => {
        // let o = require('./collection.json');
        for(let key in json){
            if( this.props.match.params.id == json[key].id){
                let pic = json[key].pictures;
                return (
                    pic.map( (i) => (
                        <View h='538px' m='20px 10px'>
                            <View h='538px'>
                                <img onClick={this.zoomSlider} src={i} alt='i'/>
                            </View>
                        </View>
                        )
                    )
                )
            }
        }
    }
    itemsInfo = () => {
        for(let key in json){
            if( this.props.match.params.id == json[key].id){
                return json[key].title
            }
        }
    }
    
    render(){
        return(
            <>
                <Header/>
                <View p='100px 0'>
                    <View tAlign='center' tTf='uppercase' fontSize='45px' op='0.5'>{this.itemsInfo()}</View>
                    <View id='item' flex fW='wrap' justC='center' m='0px 100px'>
                        {this.renderItem()}
                    </View>
                </View>
                <Footer/>
            </>
        )
    }
}

export default CollextionIntro;


// import React from 'react';
// // import styled from 'styled-components';
// import { 
//     Header,
//     Footer,
// } from '../../components';
// import { View } from '../../styled';

// import p1 from '../../assets/images/col1.jpg';

// class CollextionIntro extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             item: [
//                 {
//                     id: 1,
//                     src: p1,
//                 },
//                 {
//                     id: 2,
//                     src: p1,
//                 },
//                 {
//                     id: 3,
//                     src: p1,
//                 },
//                 {
//                     id: 4,
//                     src: p1,
//                 },
//                 {
//                     id: 5,
//                     src: p1,
//                 },
//                 {
//                     id: 6,
//                     src: p1,
//                 }
//             ],
//         }
//     }
//     componentDidMount() {
//         window.scrollTo(0,0)
//     }
//     renderItem = () => (
//         this.state.item.map( (item, id) => (
//             <View key={id} h='538px' m='20px 10px'>
//                 <View>
//                     <img src={item.src} alt='i'/>
//                 </View>
//             </View>
//         ) )
//     )
//     itemsInfo = () => {
//         let o = require('./collection.json');
//         for(let key in o){
//             if( this.props.match.params.id == o[key].id){
//                 return o[key].title
//             }
//             // console.log(key, o[key].id)
//         }
        

//     }
    
//     render(){
//         // console.log(this.props.match.params.id)
//         return(
//             <>
//                 <Header/>
//                 <View p='100px 0'>
//                     <View tAlign='center' tTf='uppercase' fontSize='45px' op='0.5'>{this.itemsInfo()}</View>
//                     <View id='svitr' flex fW='wrap' justC='center' m='0px 100px'>
//                         {this.renderItem()}
//                     </View>
//                 </View>
//                 <Footer/>
//             </>
//         )
//     }
// }

// export default CollextionIntro;
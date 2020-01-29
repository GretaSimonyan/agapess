import React from 'react';
import { 
    Header,
    Footer,
} from '../../components';
import { View } from '../../styled';
import json from './collection.json';
import ZoomSlider from '../ZoomSlider';

class CollectionIntro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opend: false,
            showModalIndex: 1,
            arr: []
        }
    };
    componentDidMount() {
        window.scrollTo(0,0)
    };
    toggleSlider = (index,pic) => {
        this.setState(state => ({ opend: !state.opend, showModalIndex: index, arr: pic}));
    };
    renderItem = () => {
        for(let key in json){
            if( this.props.match.params.id == json[key].id){
                let pic = json[key].pictures;
                return (
                    pic.map( (i,index) => (
                        <View key={index} h='538px' m='20px 10px'>
                            <View h='538px'>
                                <img onClick = {() => this.toggleSlider(index,pic)} src={i} alt='i'/>
                            </View>
                        </View>
                        )
                    )
                )
            }
        }
    };
    itemsInfo = () => {
        for(let key in json){
            if( this.props.match.params.id == json[key].id){
                return json[key].title
            }
        }
    };
    
    render(){
        console.log(this.state.showModalIndex)
        return(
            <>
                <Header/>
                <View p='100px 0'>
                    <View tAlign='center' tTf='uppercase' fontSize='45px' op='0.5'>{this.itemsInfo()}</View>
                    <View id='item' flex fW='wrap' justC='center' m='0px 100px'>
                        {this.renderItem()}
                        {this.state.opend &&
                            <ZoomSlider onClose={this.toggleSlider} showModalIndex={this.state.showModalIndex} arr={this.state.arr}/>
                        }
                    </View>
                </View>
                <Footer/>
            </>
        )
    }
}

export default CollectionIntro;


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
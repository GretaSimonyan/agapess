import React from 'react';
// import styled from 'styled-components';
import { 
    Header,
    Footer,
} from '../../components';
import { View } from '../../styled';

import p1 from '../../assets/images/col1.jpg';

class CollextionIntro extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0,0)
    }
    renderItem = () => {
        let o = require('./collection.json');
        for(let key in o){
            if( this.props.match.params.id == o[key].id){
                let pic = o[key].pictures;
                // console.log(pic)
                pic.map( (i) => (
                    <View h='538px' m='20px 10px'>
                        <View>
                            <img src={i[0]} alt='i'/>
                        </View>
                    </View>
                    )
                )
            }
        }
    }
    itemsInfo = () => {
        let o = require('./collection.json');
        for(let key in o){
            if( this.props.match.params.id == o[key].id){
                return o[key].title
            }
            // console.log(key, o[key].id)
        }
    }
    
    render(){
        // console.log(this.props.match.params.id)
        return(
            <>
                <Header/>
                <View p='100px 0'>
                    <View tAlign='center' tTf='uppercase' fontSize='45px' op='0.5'>{this.itemsInfo()}</View>
                    <View id='svitr' flex fW='wrap' justC='center' m='0px 100px'>
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
import React from 'react';
import { 
    Header,
    Footer,
} from '../../components';
import { View } from '../../styled';
import json from './collection.json';
import ZoomSlider from '../../components/ZoomSlider';

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
        this.setState(state => ({ 
            opend: !state.opend, 
            showModalIndex: index, 
            arr: pic}
        ));
    };
    renderItem = () => {
        for(let key in json){
            if( this.props.match.params.id == json[key].id){
                let pic = json[key].pictures;
                return (
                    pic.map( (i,index) => (
                        <View key={index} m='20px 10px'>
                            <View onClick={() => this.toggleSlider(index,pic)}
                                w='300px'
                                h='400px'
                                bgImg={i}
                                cursor='pointer'
                                bgSize='contain'
                                bgRep='no-repeat'
                            />
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
        // console.log(this.state.showModalIndex)
        return(
            <>
                <Header/>
                <View p='100px 0' p_m='200px 0' p_s='200px 0'>
                    <View tAlign='center' tTf='uppercase' fontSize='32px' op='0.5'>
                        {this.itemsInfo()}
                    </View>
                    <View id='item' flex fW='wrap' justC='center' m='0px 100px'>
                        {this.renderItem()}
                        {this.state.opend &&
                            <ZoomSlider 
                                onClose={this.toggleSlider}
                                showModalIndex={this.state.showModalIndex}
                                arr={this.state.arr}
                            />
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
// import { 
//     Header,
//     Footer,
// } from '../../components';
// import { View } from '../../styled';
// import json from './collection.json';
// import ZoomSlider from '../../components/ZoomSlider';
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
//             opend: false,
//             showModalIndex: 1,
//         }
//     }
//     componentDidMount() {
//         window.scrollTo(0,0)
//     };
//     toggleSlider = (index) => {
//         this.setState(state => ({ 
//             opend: !state.opend, 
//             showModalIndex: index, 
//             }
//         ));
//     };
//     renderItem = () => (
//         this.state.item.map( (item, index) => (
//             <View key={index} m='20px 10px'>
//                 <View 
//                     w='300px'
//                     h='400px'
//                     bgImg={item.src}
//                     cursor='pointer'
//                     bgSize='contain'
//                     bgRep='no-repeat'
//                 />
//                 </View>
//         ) )
//     )
//     itemsInfo = () => {
//         for(let key in json){
//             if( this.props.match.params.id == json[key].id){
//                 return json[key].title
//             }
//         }
//     };
    
//     render(){
//         // console.log(this.props.match.params.id)
//         return(
//             <>
//                 <Header/>
//                 <View p='100px 0' p_m='200px 0' p_s='200px 0'>
//                     <View tAlign='center' tTf='uppercase' fontSize='32px' op='0.5'>
//                         {this.itemsInfo()}
//                     </View>
//                     <View id='item' flex fW='wrap' justC='center' m='0px 100px'>
//                         {this.renderItem()}
//                         {this.state.opend &&
//                             <ZoomSlider 
//                                 onClose={this.toggleSlider}
//                                 showModalIndex={this.state.showModalIndex}
//                             />
//                         }
//                     </View>
//                 </View>
//                 <Footer/>
//             </>
//         )
//     }
// }

// export default CollextionIntro;
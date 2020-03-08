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
            arr: [],
            images: []
        }
    };
    componentDidMount() {
        window.scrollTo(0,0);
        for(let key in json){
            if( this.props.match.params.id == json[key].id){
                let name = json[key].name;
                let imports = json[key].pictures.map( (img) => import(`../../assets/images/${name}/${img}`));
                Promise.all(imports).then(data => {
                    const pics = data.map(item => item.default);
                    this.setState({
                        images: pics
                    });
                });
            }
        }
    };
    toggleSlider = (index,pic) => {
        this.setState(state => ({ 
            opend: !state.opend, 
            showModalIndex: index, 
            arr: pic
            }
        ));
    };

    itemsInfo = () => {
        for(let key in json){
            if( this.props.match.params.id == json[key].id){
                return json[key].title
            }
        }
    };

    renderImages = () => {
        const { images } = this.state;
        return ( images.map( (i, index) => (
                <View key={index} m='12px 5px'>
                    <View onClick={() => this.toggleSlider(index, images)}
                        w='300px'
                        h='300px'
                        bgImg={i}
                        bgSize='cover'
                        bgPos='center'
                        cursor='pointer'
                        bgRep='no-repeat'
                    />
                </View>
                )
            )
        )
    }
    
    render(){
        return(
            <>
                <Header showMenu={false} />
                <View p='100px 0' p_m='200px 0' p_s='200px 0' minH='94vh' >
                    <View tAlign='center' tTf='uppercase' fontSize='32px' op='0.5'>
                        {this.itemsInfo()}
                    </View>
                    <View id='item' flex fW='wrap' justC='center' m='0px 100px'>
                        {this.renderImages()}
                        {
                            this.state.opend && (
                               <ZoomSlider 
                                    onClose={this.toggleSlider}
                                    showModalIndex={this.state.showModalIndex}
                                    arr={this.state.arr}
                                /> 
                            )
                        }
                    </View>
                </View>
                <Footer/>
            </>
        )
    }
}

export default CollectionIntro;
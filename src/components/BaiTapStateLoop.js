import React, { Component } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class BaiTapStateLoop extends Component {
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: require('../assets/glassesImage/v1.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: require('../assets/glassesImage/v2.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: require('../assets/glassesImage/v3.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: require('../assets/glassesImage/v4.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: require('../assets/glassesImage/v5.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: require('../assets/glassesImage/v6.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: require('../assets/glassesImage/v7.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: require('../assets/glassesImage/v8.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: require('../assets/glassesImage/v9.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' },
    ];

    //Những giá trị người dùng thao tác làm giao diện thay đổi => đặt giá trị đó trong state (thuộc tính của component khi thay đổi tự động render lại)
    state = {
        glassesCurrent: { id: 9, price: 30, name: 'FENDI F4300', url: require('../assets/glassesImage/v9.png'), desc: 'Light pink square lenses define these sunglasses,ending with a mother of pearl effect tip. ' }
    }

    renderGlassesItem = () => {
        return this.arrProduct.map((glassesItem, index) => {
            return <Col key={index} style={{  width: widthDevice / 3, height: 75 }}>
                <TouchableOpacity onPress={()=>{this.changeGlassesItem(glassesItem)}}>
                    <View>
                        <Image style={{ width: widthDevice / 4, height: 50, margin: '10%', marginTop: '35%' }} resizeMode='stretch' source={glassesItem.url} />
                    </View>
                </TouchableOpacity>
            </Col>
        })
    }
    changeGlassesItem = (newGlassesItem) => {
        //this.glassesCurrent = newGlassesItem;//Không render lại
        this.setState({
            glassesCurrent:newGlassesItem
        })
    }

    render() {
        return (
            <Grid>
                <Row style={{ maxHeight: heightDevice / 2, position: 'relative' }}>
                    <Image style={{ height: heightDevice / 2, marginLeft: '-5%', paddingTop: '10%' }} source={require('../assets/glassesImage/model.jpg')} resizeMode='stretch' />
                    <Image style={{ position: 'absolute', top: '20%', left: '17%', width: '70%', height: heightDevice / 7 }} resizeMode='stretch' source={this.state.glassesCurrent.url} />
                    <View style={{position:'absolute',width:widthDevice,height:'30%',backgroundColor:'rgba(132,112,255,0.3)',bottom:0}}>
                    <Text>{this.state.glassesCurrent.name}</Text>
                    </View>
                </Row>
                <Row style={{ flexWrap: 'wrap' }}>
                    {this.renderGlassesItem()}
                </Row>

            </Grid>
        )
    }
}

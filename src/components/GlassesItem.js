import React, { Component } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'


const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;


const imgGlasses = [
    require('../assets/glassesImage/v1.png'),
    require('../assets/glassesImage/v2.png'),
    require('../assets/glassesImage/v3.png'), require('../assets/glassesImage/v4.png'), require('../assets/glassesImage/v5.png'), require('../assets/glassesImage/v6.png'), require('../assets/glassesImage/v7.png'), require('../assets/glassesImage/v8.png'), require('../assets/glassesImage/v9.png')
]

export default class GlassesItem extends Component {

    render() {
        let { item } = this.props;
        //    console.log(item.url)
        //    console.log(imgGlasses[0])
        return (
            <TouchableOpacity onPress={() => {
                this.props.handleChangeGlasses(item)
            }}>
                <View>
                    {/* <Text>{item.name}</Text> */}
                    <Image style={{ width: widthDevice / 4, height: 50, margin: '10%', marginTop: '35%' }} resizeMode='stretch' source={item.url} />
                </View>
            </TouchableOpacity>
        )
    }
}

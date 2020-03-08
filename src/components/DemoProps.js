import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DemoProps extends Component {

    

    render() {
        
        // this.props
        this.props.hocVienProp = {ma:5,ten:'Nguyễn Thị B',tuoi:29};
        console.log(this.props.hocVienProp)
        let {hocVienProp} = this.props;
        return (
            <View>
                <Text style={{fontSize:30}}> {hocVienProp.ten} </Text>
                <Text style={{fontSize:30}}> {hocVienProp.tuoi} </Text>
            </View>
        )
    }
}

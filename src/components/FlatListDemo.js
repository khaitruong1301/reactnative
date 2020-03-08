import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class FlatListDemo extends Component {

    mangHocVien = [
        { ma: 1, tenHocVien: 'Nguyen van A', tuoi: 19 },
        { ma: 2, tenHocVien: 'nguyen van B', tuoi: 20 },
        { ma: 3, tenHocVien: 'nguyen van C', tuoi: 21 },
        { ma: 4, tenHocVien: 'nguyen van D', tuoi: 22 },
        { ma: 3, tenHocVien: 'nguyen van C', tuoi: 21 },
        { ma: 4, tenHocVien: 'nguyen van D', tuoi: 22 },
        { ma: 3, tenHocVien: 'nguyen van C', tuoi: 21 },
        { ma: 4, tenHocVien: 'nguyen van D', tuoi: 22 },
        { ma: 4, tenHocVien: 'nguyen van D', tuoi: 22 },

    ]

    render() {
        return (
            <View>
                <FlatList
                    style={{marginTop:'15%'}}
                    data={this.mangHocVien}
                    renderItem={({ item }) => {
                        return <View style={{flex:1,justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                           <Text style={{textAlign:'center'}}><Icon name="adduser" size={30}></Icon> {item.tenHocVien}</Text>
                        </View>
                    }}
                    keyExtractor={(item => item.ma)}
                    numColumns={3}
                >

                </FlatList>
            </View>
        )
    }
}

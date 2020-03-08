import React, { Component } from 'react'
import { Text, View,SectionList } from 'react-native'
import data from '../assets/common/menu';

import Icon from 'react-native-vector-icons/AntDesign';

export default class SectionListDemo extends Component {
    
    
    render() {
        return (
            <View style={{marginTop:50}}>
                <Text style={{paddingTop:'5%',paddingBottom:'5%',paddingLeft:'2%',fontSize:20}}>
                    CÀI ĐẶT ỨNG DỤNG
                </Text>
                <SectionList
                    sections={data}
                    renderSectionHeader={({section})=>{
                    return <View style={{paddingTop:'5%',paddingBottom:'5%',paddingLeft:'5%',backgroundColor:'rgba(0,0,0,.1)'}}>
                        <Text style={{fontSize:20}}>{section.title}</Text>
                    </View>
                    }}
                    renderItem = {({item}) => {
                    return <View style={{padding:'5%'}}>
                        <Text style={{fontSize:17}}> <Icon name={item.icon} size={30} ></Icon> {item.name}</Text>
                        </View>
                    }}
                    // renderSectionFooter={({section})=>{
                    //     return <Text style={{borderBottom:1,borderBottomWidth:5,borderBottomColor:'#000'}}> 1</Text>
                    // }}
                    // ItemSeparatorComponent = {()=>{
                    //     return <Text style={{borderBottom:1,borderBottomWidth:5,borderBottomColor:'#000'}}> 1</Text>
                    // }}
                >

                </SectionList>
            </View>
        )
    }
}

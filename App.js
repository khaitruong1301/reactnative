/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Image, Button, TouchableOpacity,TextInput,StyleSheet,Dimensions } from 'react-native';

const widthDevice = Dimensions.get('window').width; //Lấy chiều rộng thiết bị
const heightDevice = Dimensions.get('window').height;

const styles = StyleSheet.create({
  setWidth: (num) => {return {
    width: widthDevice * num /100
  }},
  setHeight: (num) => {return {
    height: heightDevice * num /100
  }},
  container:{
    flex: 1, //flex:1 chiếm 1 phần màn hình so với cha (màn hình)
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgDark: {
    backgroundColor:'#000'
  }
});
const {container,bgDark,setBackground} = StyleSheet.create({
  container:{
    flex: 1, //flex:1 chiếm 1 phần màn hình so với cha (màn hình)
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgDark: {
    backgroundColor:'#000'
  },
  setBackground: (color) => {return {backgroundColor:color}} 
})

const App = () => { //Nội dung màn hình chính của app => return()

  return (
    <>
      <View style={[styles.container,setBackground('green'),setBackground('red')]}>
        <Text style={{ fontSize: 50, color: 'red' }}>hello cybersoft</Text>
        {/* Chèn hình từ thư mục của ứng dụng */}
        {/* <Image style={{ width: 300, height: 300 }} source={require('./src/assets/Img/img1.jpg')} /> */}
        {/* Chèn hình từ nguồn khác ứng dụng */}
        {/* <Image style={{ opacity: 0.1 }} opacity={0.1} resizeMode={"contain"} style={{ width: 300, height: 300 }} source={{ uri: 'https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png' }} /> */}
        <Button title='OK'></Button>
        {/*Sử dụng button trong react-native */}
        <TouchableOpacity>
          <View style={{
            backgroundColor:'red',
            borderRadius:10,
            padding:15
          }}>
            <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>OK</Text>
          </View>
          <TextInput style={{
            borderWidth:1,
            borderColor:'blue',
            width:300,
            height:50,
            fontSize:20
          }}></TextInput>
        </TouchableOpacity>
      </View>
    </>
  );
 
};

export default App;


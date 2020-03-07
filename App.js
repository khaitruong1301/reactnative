/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput, StyleSheet, Dimensions, Platform } from 'react-native';
import EasyGridComponent from './src/components/EasyGridComponent';

import Header from './src/components/Header';
import HeaderC from './src/components/HeaderC';
import DemoLoop from './src/components/DemoLoop';
import BaiTapStateLoop from './src/components/BaiTapStateLoop';
import DemoProps from './src/components/DemoProps';


const widthDevice = Dimensions.get('window').width; //Lấy chiều rộng thiết bị
const heightDevice = Dimensions.get('window').height;


const App = () => { //Nội dung màn hình chính của app => return()

  let hocVien = {ma:1,ten:'Nguyễn Văn A',tuoi:19}

  return (
    <>
      {/* <EasyGridComponent /> */}
      {/* <Header />
      <HeaderC /> */}
      {/* <DemoLoop /> */}
      {/* <BaiTapStateLoop /> */}
      <DemoProps hocVienProp={hocVien} />
      
      
    </>
  );

};

export default App;


// <View style={{ flex: 1 }}>
//         <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 30, fontWeight: 'bold' }}>Nike</Text>
//       </View>
//       <View style={{ flex: 9 }}>
//         {/* row 1 */}
//         <View style={{ flex: 1, flexDirection: 'row',marginTop:5  }}>
//           <View style={{ flex: 1, backgroundColor: '#eee',borderRadius:15,marginLeft:15}}>
//             <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
//               <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require('./src/assets/Img/heart.png')} />
//             </View>
//             <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
//               <Image style={{ width: 150, height: 75 }} source={require('./src/assets/Img/shoe1.jpg')} />
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15 }}>GIÀY NIKE 01</Text>
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15, marginBottom: 15 }}>100$</Text>
//             </View>
//           </View>
//           <View style={{ flex: 1,marginRight:15}}>
//           <View style={{ flex: 1, backgroundColor: '#eee',borderRadius:15,marginLeft:15 }}>
//             <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
//               <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require('./src/assets/Img/heart.png')} />
//             </View>
//             <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
//               <Image style={{ width: 150, height: 75 }} source={require('./src/assets/Img/shoe1.jpg')} />
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15 }}>GIÀY NIKE 01</Text>
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15, marginBottom: 15 }}>100$</Text>
//             </View>
//             </View>
           
//           </View>
//         </View>
  
//         {/* row 2 */}
//         <View style={{ flex: 1, flexDirection: 'row',marginTop:5  }}>
//           <View style={{ flex: 1, backgroundColor: '#eee',borderRadius:15,marginLeft:15}}>
//             <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
//               <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require('./src/assets/Img/heart.png')} />
//             </View>
//             <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
//               <Image style={{ width: 150, height: 75 }} source={require('./src/assets/Img/shoe1.jpg')} />
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15 }}>GIÀY NIKE 01</Text>
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15, marginBottom: 15 }}>100$</Text>
//             </View>
//           </View>
//           <View style={{ flex: 1,marginRight:15}}>
//           <View style={{ flex: 1, backgroundColor: '#eee',borderRadius:15,marginLeft:15 }}>
//             <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
//               <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require('./src/assets/Img/heart.png')} />
//             </View>
//             <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
//               <Image style={{ width: 150, height: 75 }} source={require('./src/assets/Img/shoe1.jpg')} />
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15 }}>GIÀY NIKE 01</Text>
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15, marginBottom: 15 }}>100$</Text>
//             </View>
//             </View>
           
//           </View>
//         </View>

//         {/* row 3 */}
//         <View style={{ flex: 1, flexDirection: 'row',marginTop:5 }}>
//           <View style={{ flex: 1, backgroundColor: '#eee',borderRadius:15,marginLeft:15}}>
//             <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
//               <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require('./src/assets/Img/heart.png')} />
//             </View>
//             <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
//               <Image style={{ width: 150, height: 75 }} source={require('./src/assets/Img/shoe1.jpg')} />
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15 }}>GIÀY NIKE 01</Text>
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15, marginBottom: 15 }}>100$</Text>
//             </View>
//           </View>
//           <View style={{ flex: 1,marginRight:15}}>
//           <View style={{ flex: 1, backgroundColor: '#eee',borderRadius:15,marginLeft:15 }}>
//             <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
//               <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require('./src/assets/Img/heart.png')} />
//             </View>
//             <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center' }}>
//               <Image style={{ width: 150, height: 75 }} source={require('./src/assets/Img/shoe1.jpg')} />
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15 }}>GIÀY NIKE 01</Text>
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
//               <Text style={{ fontWeight:'bold', fontSize: 20, marginLeft: 15, marginBottom: 15 }}>100$</Text>
//             </View>
//             </View>
           
//           </View>
//         </View>
//       </View>


// const styles = StyleSheet.create({
//   setWidth: (num) => {return {
//     width: widthDevice * num /100
//   }},
//   setHeight: (num) => {return {
//     height: heightDevice * num /100
//   }},
//   container:{
//     flex: 1, //flex:1 chiếm 1 phần màn hình so với cha (màn hình)
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   bgDark: {
//     backgroundColor:'#000'
//   }
// });
// const {container,bgDark,setBackground} = StyleSheet.create({
//   container:{
//     flex: 1, //flex:1 chiếm 1 phần màn hình so với cha (màn hình)
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   bgDark: {
//     backgroundColor:'#000'
//   },
//   setBackground: (color) => {return {backgroundColor:color}} 
// })
// <View style={[styles.container,setBackground('green'),setBackground('red')]}>
// <Text style={{ fontSize: 50, color: 'red' }}>hello cybersoft</Text>
// {/* Chèn hình từ thư mục của ứng dụng */}
// {/* <Image style={{ width: 300, height: 300 }} source={require('./src/assets/Img/img1.jpg')} /> */}
// {/* Chèn hình từ nguồn khác ứng dụng */}
// {/* <Image style={{ opacity: 0.1 }} opacity={0.1} resizeMode={"contain"} style={{ width: 300, height: 300 }} source={{ uri: 'https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png' }} /> */}
// <Button title='OK'></Button>
// {/*Sử dụng button trong react-native */}
// <TouchableOpacity>
//   <View style={{
//     backgroundColor:'red',
//     borderRadius:10,
//     padding:15
//   }}>
//     <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>OK</Text>
//   </View>
//   <TextInput style={{
//     borderWidth:1,
//     borderColor:'blue',
//     width:300,
//     height:50,
//     fontSize:20
//   }}></TextInput>
// </TouchableOpacity>
// </View>
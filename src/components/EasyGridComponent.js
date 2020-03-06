import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
//Lấy độ rộng và chiều cao của thiết bị
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const { style_card_item } = StyleSheet.create({
    style_card_item: { backgroundColor: '#fff', margin: '10%', width: widthDevice / 4, height: '80%' }
})

const EasyGridComponent = () => {

    return (
        <Grid>
            <Row style={{ backgroundColor: 'pink' }}>
                <View style={{backgroundColor:'#fff',margin:'10%',width:'85%',height:'50%'}}></View>
            </Row>
            <Row size={2} style={{ backgroundColor: 'orange' }}></Row>
            <Row style={{ backgroundColor: 'green' }}>
                <Col style={{ backgroundColor: 'green' }}>
                    <View style={style_card_item}></View>
                </Col>
                <Col style={{ backgroundColor: 'green' }}>
                    <View style={style_card_item}></View>
                </Col>
                <Col style={{ backgroundColor: 'green' }}>
                    <View style={style_card_item}></View>
                </Col>
            </Row>
            <Row style={{ backgroundColor: '#FF33FF' }}>
                <Col style={{backgroundColor:'#9966FF'}}></Col>
                <Col style={{backgroundColor:'#FF6600'}}></Col>
                
            </Row>
            <Row style={{ backgroundColor: '#3300FF' }}>
            <Col style={{backgroundColor:'#00EE00'}}></Col>
                <Col style={{backgroundColor:'#002200'}}></Col>
                
            </Row>
            <Row style={{ backgroundColor: '#FF6666' }}>
            <Col style={{backgroundColor:'#9966FF'}}></Col>
                <Col style={{backgroundColor:'#FF6600'}}></Col>
                
            </Row>
        </Grid>
    )
}

export default EasyGridComponent

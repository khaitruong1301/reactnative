import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Row, Grid, Col } from 'react-native-easy-grid';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;


export default class DemoLoop extends Component {

    data = [
        { maHV: 1, hoTen: 'Nguyễn văn a', soDT: '0123456789' },
        { maHV: 2, hoTen: 'Lê Thị C', soDT: '0123456789' },
        { maHV: 3, hoTen: 'Lê Thị D', soDT: '0123456789' },
        { maHV: 4, hoTen: 'Trần Văn B', soDT: '0123456789' },
    ]

    arrFood = [
        { ma: 1, tenMon: 'Gà nướng', gia: 10, hinhAnh: require('../assets/food/product1.jpg') },
        { ma: 2, tenMon: 'Bò nướng', gia: 20, hinhAnh: require('../assets/food/product2.jpg') },
        { ma: 3, tenMon: 'Mì ý', gia: 30, hinhAnh: require('../assets/food/product3.jpg') },
        { ma: 4, tenMon: 'Heo hun khói', gia: 40, hinhAnh: require('../assets/food/product4.jpg') },
        { ma: 5, tenMon: 'Gà ri', gia: 50, hinhAnh: require('../assets/food/product5.jpg') },
        { ma: 6, tenMon: 'Sường nướng', gia: 60, hinhAnh: require('../assets/food/product6.jpg') }
        
    ]

    renderFoodItem = () => {
        return this.arrFood.map(({ ma, tenMon, hinhAnh, gia }, index) => {
            return <Col style={{ width: widthDevice / 2, height: 200 }}>
                <View style={{ padding: '5%' }}>
                    <Text style={{ fontSize: 17 }}>{tenMon}</Text>
                    <Image style={{ width: 150, height: 75 }} source={hinhAnh} resizeMode='contain' />
                    <Text style={{ fontSize: 17, color: 'red', fontWeight: 'bold' }}>{gia}</Text>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#FFCC66', width: 150, alignItems: 'center', padding: 5 }}>
                            <Text>  Đặt món </Text>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </Col>
        })
    }

    renderHocVien = () => {
        // return arrContent; //Trả về mảng jsx comHocVien để render ra giao diện
        //Cách 2 dùng es6: Tạo mảng componentHocVien từ mảng hocVien
        var mangComponentHocVien = this.data.map(({ maHV, hoTen, soDT }, index) => {
            //Callback trong map chạy n lần ứng với số phần tử của this.data
            //Mỗi lần chạy bắt buộc return về 1 giá trị cho mảng mới
            // let {maHV,hoTen,soDT} = hocVien; bóc tách thuộc tính trong object ES6 
            return <View key={index}>
                <Text>Mã học viên: {maHV}</Text>
                <Text>Tên viên: {hoTen}</Text>
                <Text>Số điện thoại: {soDT}</Text>
            </View>;
        });
        return mangComponentHocVien;
    }

    render() {
        return (
            <Grid>
                <Row style={{ maxHeight: 250 }}>
                    <Image style={{ height: 250 }} source={require('../assets/food/imageMenu.jpg')} resizeMode="stretch" />
                </Row>
                <Row style={{ flexWrap: 'wrap' }}>
                    {this.renderFoodItem()}

                </Row>

                {/* {this.renderHocVien()} */}

            </Grid>
        )
    }
}

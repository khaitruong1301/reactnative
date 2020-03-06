//rnc
import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Alert } from 'react-native'

export default class HeaderC extends Component {
    //react class component có thể render thuộc tính và phương thức lên giao diện thông qua từ khoá this.
    state = {
        isLogin: false
    }
    title = 'hello react-native';
    name = 'khải';

    renderTitle = () => {

        //Nội dung trả về phải có duy nhất 1 thẻ bao phủ
        return (
            <Text>
                Hello 123
            </Text>
        )
    }
    //Xử lý sự kiện react-native 
    handleShowMessage = (name) => {
        Alert.alert(name);
    }

    //Xây dựng phương thức login => sử dụng setState để re-render giao diện
    login = () => {
        //this.state.isLogin = true; //=>Thay đổi giá trị của state.isLogin nhưng k render lại giao diện
        // let newState = {isLogin:true};
        //Gọi phương thức setState => giao diện render lại
        // this.setState(newState);
        this.setState({
            isLogin:true
        })
    }
    
    renderContent = () => {
        if (this.state.isLogin) {
            return <Text>{this.name}</Text>;
        }
        return <TouchableOpacity onPress={this.login}>
            <View style=
                {{
                    backgroundColor: 'orange',
                    padding: 15,
                    borderRadius: 5
                }}>
                <Text>Login</Text>
            </View>

        </TouchableOpacity>
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {this.renderContent()}
                {this.state.isLogin === true ? <Text>{this.name}</Text> : <TouchableOpacity>
                    <View style=
                        {{
                            backgroundColor: 'orange',
                            padding: 15,
                            borderRadius: 5
                        }}>
                        <Text>Login</Text>
                    </View>

                </TouchableOpacity>}
            </View>
        )
    }
}

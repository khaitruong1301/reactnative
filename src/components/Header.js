//Tạo rnf => react function component
import React from 'react'
import { View, Text } from 'react-native'

//Nôi dung render nằm trong 1 thẻ bao phủ
const Header = () => {
    //Binding giá trị lên giao diện sử dụng biến
    let title = 'cybersoft react-native';
    //Binding giá trị lên giao diện sử dụng hàm
    let renderTitle = () => {
        //Hàm này phải trả về 1 component react-native hoặc chuỗi
        return <Text>
            Hello 123
        </Text>
    }
    let renderTitleText = () => {
        //Hàm này phải trả về 1 component react-native hoặc chuỗi
        return 'Hello 123847'
    }

    return (
        <View>
            <Text>{title}</Text>
            {renderTitle()}
            <Text> {renderTitleText()} </Text>

        </View>
    )
}
//export default => component nào sử dụng component này sẽ import {name} from 'path'
export default Header

import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

export default class ScrollViewDemo extends Component {
    render() {
        return (
            <View style={{ flex: 1,marginTop:100, flexDirection: 'row', flexWrap: 'wrap',height:300 }}>
                <ScrollView
                    horizontal={true}
                >
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                    <Text> textInComponent </Text>
                </ScrollView>
            </View>
        )
    }
}

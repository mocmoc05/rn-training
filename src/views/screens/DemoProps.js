import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class DemoProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            value: ''
        }
    }
    render() {
        return (
            <SafeAreaView>
                <Text>Name: {this.props.name}</Text>
                <Text onPress={this.props.press} style={{fontSize: 20, fontWeight: '700'}}>
                    Age: {this.props.age}
                </Text>
                {this.props.children}
            </SafeAreaView>
        )
    }
}
import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';

export default class ScreenB extends Component {
    state = {}

    goBackToScreen = () => {
        // đi từ B VỀ A : A <= B
        this.props.navigation.goBack()
    }

    componentWillUnmount() {
        console.log('un mount')
    }

    render() {
        console.log('render B')
        return (
            <SafeAreaView>
                <Text style={{ textAlign: 'center' }}>Screen B</Text>
                <Button title={'Go back A'} onPress={this.goBackToScreen}/>
            </SafeAreaView>
        )
    }
}

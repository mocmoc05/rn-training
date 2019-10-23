import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';

export default class ScreenA extends Component {
    constructor() {
        super();
        this.state = {} 
        this.navigateToScreen = this.navigateToScreen.bind(this)
    }

    navigateToScreen() {
        this.props.navigation.navigate('C') // ĐI từ A SANG B: navigate  A => B
    }

    render() {
        console.log('render A')
        return (
            <SafeAreaView>
                <Text style={{textAlign: 'center'}}>Screen A</Text>
                <Button title={'Go to Screen C'} onPress={this.navigateToScreen}/>
            </SafeAreaView>
        )
    }
}

import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

export default class ScreenC extends Component {

    static navigationOptions = {
        title: 'Screen C'
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log('did mount')
        // console.log({name})
    }

    componentWillUnmount() {
        // console.log('will unmount')
    }

    render() {
        return (
            <SafeAreaView>
                <Text>ScreenC</Text>
                <Text>Name: {this.props.navigation.state.params.name}</Text>
                <Button
                    title={'Go to D'}
                    onPress={() => this.props.navigation.navigate('ScreenD')}
                />
            </SafeAreaView>
        )
    }
}
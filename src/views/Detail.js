import React, { Component } from 'react'
import { View, Text } from 'react-native';
import {SafeAreaView} from 'react-native';

export default class Detail extends Component {
    state = {  }
    componentDidMount() {
        const name = this.props.navigation.getParam("name");
        console.log({name})
    }
    render() {
        const {name} = this.props.navigation.state.params;
        return (
            <SafeAreaView>
                <Text>Hello: {name}</Text>
            </SafeAreaView>
        )
    }
};

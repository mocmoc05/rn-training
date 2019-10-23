import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default class Group extends Component {
    state = {  }
    render() {
        console.log(this.props)
        return (
            <SafeAreaView>
                <Text>Group</Text>
            </SafeAreaView>
        )
    }
}
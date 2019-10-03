import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TextApp extends Component {
    render() {
        const { style, children } = this.props;
        return (
            <Text {...this.props} style={[{ fontFamily: 'Poppins'}, style]} children={children}/>
        )
    }
}
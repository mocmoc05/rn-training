import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

export default class MyModal extends Component {
    state = {  }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
    },
    innerContainer: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        top: 100,
        backgroundColor: 'red',
        borderRadius: 8
    },
});
import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

//khai niem: State va Props;

export default class Calculate extends Component {
    constructor(){
        super();
        this.state = {
            number: 6
        }
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(){
        this.setState({number: this.state.number + 1})
    }

    render() {
        console.log(this)
        return (
            <SafeAreaView style={{alignItems: 'center', flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                <Button title={'Giam'} onPress={this.handlePress}/>
                <Text>{this.state.number}</Text>
                <Button title={'Tang'} />
            </SafeAreaView>
        )
    }
}
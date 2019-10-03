import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput} from 'react-native';
import DemoProps from './DemoProps';

export default class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    onClick = () => {
        alert(111)
    }
    render() {
        return (
            <SafeAreaView>
                <Text>Demo</Text>
                <DemoProps 
                    name={'Hoan'} 
                    age={this.state.number} 
                    press={this.onClick}
                />
                <DemoProps name={'Bim'}/>
                <DemoProps name={'Quyen'}/>
                <DemoProps>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                </DemoProps>
            </SafeAreaView>
        )
    }
}
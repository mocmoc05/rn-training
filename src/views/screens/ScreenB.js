import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import {connect} from 'react-redux';

class ScreenB extends Component {
    static navigationOptions = {
        title: 'Screen B'
    }

    constructor(props){
        super(props);
        //this.getData()
        // console.log('constructor')
    }

    componentDidMount() {
        // console.log('did mount')
        let name = this.props.navigation.getParam('name');
        // console.log({name})
    }

    componentWillUnmount() {
        // console.log('will unmount')
    }

    render() {
        console.log(this.props);
        return (
            <SafeAreaView>
                <Text>ScreenB</Text>
                <Text>Name: {this.props.navigation.state.params.name}</Text>
                <Button title='go back' onPress={() => {
                    // this.props.navigation.state.params.getDataB('Quyen, Bim');
                    this.props.navigation.goBack()
                }}/>
                <Button title='go to C' onPress={() => {
                    this.props.navigation.navigate('ScreenC', { name: this.props.navigation.state.params.name})
                }}/>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.screenReducer.username
    }
}

export default connect(mapStateToProps, {})(ScreenB);
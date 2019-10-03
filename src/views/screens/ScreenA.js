import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import {connect} from 'react-redux';

class ScreenA extends Component {
    static navigationOptions = {
        title: 'Screen A'
    }

    constructor(props){
        super(props);
        this.state = {
            data: '',
            name: 'Bim'
        }
        this.getDataB = this.getDataB.bind(this);
    }

    goToB() {
        this.props.navigation.navigate('ScreenB', {
            name: this.state.name,
            getDataB: this.getDataB
        })
    }

    getDataB = (data) => {
        this.setState({data})
    }

    componentDidMount() {
        console.log('did mount A')
        // let name = this.props.navigation.getParam('name');
        // console.log({name})
    }

    componentWillUnmount() {
        console.log('will unmount A')
    }

    render() {
        console.log(this.props);
        return (
            <SafeAreaView>
                <Text>ScreenA: {this.state.data}</Text>
                <Button title={'Go to Screen B'} onPress={this.goToB.bind(this)}/>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        username: state.screenReducer.username
    }
}

export default connect(mapStateToProps, {})(ScreenA);
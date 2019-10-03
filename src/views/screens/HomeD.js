import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {connect} from 'react-redux';

class HomeD extends Component {
    static navigationOptions = {
        title: 'Home D'
    }
    render() {
        return (
            <View>
                <Text>Home D</Text>
                <Text>Name: {this.props.name}</Text>
                <Text>Age: {this.props.age}</Text>
                {/* <Text>Name D: {this.props.navigation.state.params.name}</Text> */}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.homeReducer.name,
        age: state.homeReducer.age
    }
}

export default connect(mapStateToProps, null)(HomeD);
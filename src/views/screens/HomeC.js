import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';

class HomeC extends Component {
    static navigationOptions = {
        title: 'Home C'
    }

    state = {}
    render() {
        return (
            <View>
                <Text>Home C</Text>
                <Text>Device: {this.props.device}</Text>
                <Text>Brand: {this.props.brand}</Text>
                {/* <Text>Name C: {this.props.navigation.state.params.name}</Text> */}
                <Button 
                title='Go to D'
                    onPress={() => { this.props.navigation.navigate('HomeD') }}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        device: state.home2Reducer.device,
        brand: state.home2Reducer.brand
    }
}

export default connect(mapStateToProps, null)(HomeC);

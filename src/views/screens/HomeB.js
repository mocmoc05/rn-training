import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';

class HomeB extends Component {
    static navigationOptions = {
        title: 'Home B'
    }

    state = {}

    render() {
        return (
            <View>
                <Text>Home B</Text>
                <Text>Device: {this.props.device}</Text>
                <Text>Brand: {this.props.brand}</Text>
                {/* <Text>Name B: {this.props.navigation.state.params.name}</Text> */}
                <Button 
                title='Go to C'
                onPress={() => {this.props.navigation.navigate('HomeC')}}
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

export default connect(mapStateToProps, null)(HomeB);